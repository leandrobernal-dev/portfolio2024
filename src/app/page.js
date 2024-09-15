import CustomCursor from "@/app/components/Cursor";

export default function Home() {
    return (
        <div className="grid-cols-1 grid md:grid-cols-2 cursor-none h-screen w-full overflow-hidden from-black to-[#272E36] bg-gradient-to-br">
            <div className=""></div>
            <div className="bg-white grid grid-rows-2 ">
                <div className="bg-[#D5C1B6]"></div>
                <div className=""></div>
            </div>
            <CustomCursor />
        </div>
    );
}
