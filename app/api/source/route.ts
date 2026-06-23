import { NextResponse } from "next/server";
import JSZip from "jszip";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SOURCE_ROOTS = ["app", "components", "lib", "public"];
const ROOT_FILES = [
  "package.json",
  "tsconfig.json",
  "tailwind.config.ts",
  "postcss.config.mjs",
  "next.config.mjs",
  ".eslintrc.json",
];

async function addDirToZip(
  zip: JSZip,
  absPath: string,
  relPath: string
): Promise<void> {
  const entries = await fs.readdir(absPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const absChild = path.join(absPath, entry.name);
    const relChild = path.join(relPath, entry.name);
    if (entry.isDirectory()) {
      await addDirToZip(zip, absChild, relChild);
    } else {
      const content = await fs.readFile(absChild);
      zip.file(relChild, content);
    }
  }
}

export async function GET() {
  try {
    const zip = new JSZip();
    const projectRoot = process.cwd();

    for (const dir of SOURCE_ROOTS) {
      const abs = path.join(projectRoot, dir);
      try {
        await fs.access(abs);
        await addDirToZip(zip, abs, dir);
      } catch {
        // Directory may not exist in some deployments; skip quietly.
      }
    }

    for (const file of ROOT_FILES) {
      const abs = path.join(projectRoot, file);
      try {
        const content = await fs.readFile(abs);
        zip.file(file, content);
      } catch {
        // Skip missing files.
      }
    }

    const buffer = await zip.generateAsync({ type: "nodebuffer" });

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition":
          'attachment; filename="TMRW-Foundation-proposal-source.zip"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to generate source bundle", detail: message },
      { status: 500 }
    );
  }
}
