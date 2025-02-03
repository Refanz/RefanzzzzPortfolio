import {HiOutlineSun, HiXMark} from "react-icons/hi2";
import {FiMenu} from "react-icons/fi";
import {useState} from "react";

const Navbar = () => {

    const [isSidebarOpen, setShowSidebar] = useState(false);

    const showSidebar = () => {
        setShowSidebar(!isSidebarOpen);
    }

    return (
        <header className="sticky top-0 w-full z-50 shadow-sm bg-white  min-[855px]:px-[80px]">
            <div className="flex justify-between  items-center mx-auto  max-w-7xl py-[16px] px-[32px]">
                <span className="font-bold text-3xl">{"<RSS/>"}</span>
                <div className="min-[855px]:flex items-center gap-12 max-[855px]:hidden">
                    <ul className="flex gap-6">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Experience</a>
                        </li>
                        <li>
                            <a>Project</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <HiOutlineSun className="size-6"/>
                        <button className="bg-black px-4 py-[6px] rounded-xl text-white">Download CV</button>
                    </div>
                </div>
                <div className="min-[855px]:hidden">
                    <button className="size-9 cursor-pointer hover:bg-gray-100 hover:rounded-lg p-[6px]"
                            onClick={showSidebar}>
                        <FiMenu className="size-6"/>
                    </button>
                </div>
            </div>
            <div
                className={`bg-white shadow-lg w-80 h-dvh absolute top-0 ${isSidebarOpen ? "-right-100" : "right-0"} transition-all delay-100 duration-300 ease-in-out`}>
                <div className="flex justify-between items-center p-4 shadow-xs">
                    <span className="font-bold text-2xl">{"<RSS/>"}</span>
                    <button className="size-9 p-[6px] hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                            onClick={showSidebar}>
                        <HiXMark className="size-6"/>
                    </button>
                </div>
                <nav className="p-4 shadow-xs">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Experience</a>
                        </li>
                        <li>
                            <a>Project</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span>Switch Theme</span>
                        <HiOutlineSun className="size-6"/>
                    </div>
                    <button className="bg-black text-white w-full px-4 py-[6px] rounded-xl">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;