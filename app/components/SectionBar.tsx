export default function SectionBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#c06882] text-white font-bold text-[13px] rounded-lg px-[14px] py-[7px] mb-2">
      {children}
    </div>
  );
}
