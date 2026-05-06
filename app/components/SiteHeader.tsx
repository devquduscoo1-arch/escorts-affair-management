import Image from "next/image";
import NavDrawer from "./NavDrawer";

export default function SiteHeader() {
  return (
    <header className="w-full">
      {/* Row 1: hamburger + brand + Post */}
      <div className="max-w-[1100px] mx-auto px-4 pt-4 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NavDrawer />
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Escorts Affair logo"
              width={140}
              height={40}
              priority
              className="w-[110px] md:w-[160px]"
            />
            <span className="text-pink-primary font-bold text-[14px] md:text-[17px] leading-none -ml-2">Management</span>
          </div>
        </div>

        <a
          href="https://www.escortsaffair.com/manage/ad/market"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 text-[13px] font-semibold bg-pink-primary text-white hover:bg-pink-deep"
        >
          Post
        </a>
      </div>

      {/* Row 2: Adult SEO right-aligned */}
      <div className="max-w-[1100px] mx-auto px-4 flex justify-end pb-3">
        <a
          href="https://www.escortsaffair.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-primary underline text-[13px]"
        >
          Adult SEO
        </a>
      </div>
    </header>
  );
}
