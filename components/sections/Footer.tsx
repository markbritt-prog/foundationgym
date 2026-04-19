import Image from "next/image";
import { PARTNER_NAME } from "@/lib/constants";
import { DownloadMarkdown } from "@/components/DownloadMarkdown";
import { DownloadSource } from "@/components/DownloadSource";

export function Footer() {
  return (
    <footer className="bg-tmrw-black border-t border-tmrw-grey-900 py-20 text-center px-6">
      <Image
        src="https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Monogram_White_dyghqg.svg"
        alt="TMRW"
        width={40}
        height={40}
        className="mx-auto mb-6"
      />

      <p className="font-body text-[1.125rem] italic text-tmrw-grey-300 tracking-[-0.01em]">
        The doctor will see you now.
      </p>

      <div className="mt-8 space-y-1">
        <p className="font-ui text-[0.6rem] uppercase tracking-[0.04em] text-tmrw-grey-700">
          TMRW
        </p>
        <p className="font-body text-[0.8rem] text-tmrw-grey-700 tracking-[-0.01em]">
          Precision health. Personalised protocols. Brighter tomorrows.
        </p>
        <p className="font-ui text-[0.6rem] uppercase tracking-[0.04em]">
          <a
            href="https://startmytomorrow.com"
            className="text-tmrw-grey-700 hover:text-tmrw-white transition-colors"
          >
            STARTMYTOMORROW.COM
          </a>
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3">
        <DownloadMarkdown />
        <DownloadSource />
      </div>

      <p className="font-ui text-[0.55rem] uppercase tracking-[0.04em] text-tmrw-grey-800 mt-8">
        This document is confidential and prepared exclusively for {PARTNER_NAME}.
      </p>
    </footer>
  );
}
