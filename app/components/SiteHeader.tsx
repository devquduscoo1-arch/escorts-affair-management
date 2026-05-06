import Image from "next/image";
import NavDrawer from "./NavDrawer";

export default function SiteHeader() {
  return (
    <header className="w-full">
      <div className="max-w-[1100px] mx-auto px-6 pt-4 pb-3 flex items-center justify-between">
        {/* Left: hamburger + brand */}
        <div className="flex items-center gap-3">
          <NavDrawer />

          <div className="flex items-center">
            <Image src="/logo.png" alt="Escorts Affair logo" width={200} height={57} priority />
            <span className="text-pink-primary font-bold text-[17px] leading-none -ml-3">Management</span>
          </div>
        </div>

        {/* Right: Adult SEO link + Post button */}
        <div className="flex items-center gap-3">
          <a href="https://www.escortsaffair.com" target="_blank" rel="noopener noreferrer" className="text-pink-primary underline text-[13px]">Adult SEO</a>
          <a href="https://www.escortsaffair.com/manage/ad/market" target="_blank" rel="noopener noreferrer" className="rounded-full px-[14px] py-1 text-[12px] font-semibold bg-pink-primary text-white hover:bg-pink-deep inline-block">Post</a>
        </div>
      </div>

    </header>
  );
}
