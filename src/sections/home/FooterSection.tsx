import {BiCopyright, BiHeart} from "react-icons/bi";

const FooterSection = () => {
    return (
        <footer className="flex py-6 gap-1 items-center mx-auto justify-center max-w-[1440px] min-[855px]:px-[80px]">
            <BiCopyright/>
            <span>2025 | Designed with </span>
            <BiHeart className="text-red-500"/>
            <span>by Sagar Shah | Coded by Refan</span>
        </footer>
    )
}

export default FooterSection;