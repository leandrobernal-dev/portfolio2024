import CustomCursor from "@/app/components/Cursor";

export default function Home() {
  return (
    <div className="grid h-screen w-full cursor-none grid-cols-1 overflow-hidden bg-gradient-to-br from-black to-[#272E36] md:grid-cols-2">
      <div className=""></div>
      <div className="grid grid-rows-2 bg-white">
        <div className="bg-[#D5C1B6]"></div>
        <div className=""></div>
      </div>
      <CustomCursor />
    </div>
  );
}
