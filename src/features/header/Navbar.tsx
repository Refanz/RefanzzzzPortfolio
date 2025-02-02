import {HiOutlineSun} from "react-icons/hi2";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full z-10 shadow-sm bg-white  min-[855px]:px-[80px]">
            <div className="flex justify-between  items-center mx-auto  max-w-7xl py-[16px] px-[32px]">
                <span className="font-bold text-3xl">{"<RSS/>"}</span>
                <div className="min-[855px]:flex items-center gap-12 max-[855px]:hidden">
                    <ul className="flex gap-6">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Work</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
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
                    <FiMenu/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;