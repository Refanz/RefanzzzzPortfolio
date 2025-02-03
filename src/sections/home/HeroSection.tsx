import {HiOutlineMapPin} from "react-icons/hi2";
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi";
import Person from "../../assets/person.png";

const HeroSection = () => {
    return (
        <section className="px-8 py-24 flex max-[855px]:flex-col-reverse justify-between gap-12">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <span className="text-6xl font-bold">Hi, I'm Refan</span>
                    <p>
                        Hello, I am a full stack developer. I like learning new things related to technology. During my
                        education I have studied several areas of technology such as creating websites, IOT, creating
                        games, creating Android applications, networking, and designing. From this field, I like Android
                        application development. Currently, I continue to try to learn so that my dream of becoming a
                        programmer is achieved.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <HiOutlineMapPin className="size-6"/>
                        <span>Semarang City, Indonesia</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="size-6 p-2">
                            <div className="size-2 bg-[#10B981] rounded-full"></div>
                        </div>
                        <span>Available for new projects</span>
                    </div>
                </div>
                <div className="flex gap-1">
                    <span className="size-9">
                        <FiGithub className="size-6"/>
                    </span>
                    <span className="size-9">
                        <FiInstagram className="size-6"/>
                    </span>
                    <span className="size-9">
                        <FiLinkedin className="size-6"/>
                    </span>
                </div>
            </div>
            <div className="max-[855px]:self-center">
                <div className="relative">
                    <img alt="me" src={Person}
                         className="w-[280px] h-[320px] max-[855px]:w-[240px] max-[855px]:h-[280px] object-contain absolute bottom-10 right-10 max-[855px]:left-5 max-[855px]:bottom-5"/>
                    <div className="w-[280px] h-[320px] max-[855px]:h-[280px] bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;