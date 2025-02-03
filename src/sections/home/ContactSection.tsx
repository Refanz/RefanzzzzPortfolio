import Badge from "../../components/Badge.tsx";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {HiOutlineClipboardCopy, HiOutlinePhone} from "react-icons/hi";
import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi";

const ContactSection = () => {
    return (
        <section className="px-8 py-24 flex flex-col gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
                <Badge desc="Get in touch"/>
                <span className="text-center">What's next? Feel free to reach out me if you're looking for a developer, have a query, or simply want to connect.</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 items-center">
                    <HiOutlineEnvelope className="size-6 md:size-9"/>
                    <span className="text-gray-900 md:text-4xl font-semibold">refandasuryasaputra@gmail.com</span>
                    <HiOutlineClipboardCopy className="size-6 md:size-9"/>
                </div>
                <div className="flex gap-4 items-center">
                    <HiOutlinePhone className="size-6 md:size-9"/>
                    <span className="text-gray-900 md:text-4xl font-semibold">+62 831 6244 3210</span>
                    <HiOutlineClipboardCopy className="size-6 md:size-9"/>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <span>You may also find me on these platforms</span>
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
        </section>
    )
}

export default ContactSection;