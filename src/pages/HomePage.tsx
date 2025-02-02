import Navbar from "../features/header/Navbar.tsx";
import {HiOutlineMapPin} from "react-icons/hi2";
import {FiFigma, FiGithub, FiTwitter} from "react-icons/fi";
import Person from "../assets/person.png";
import Person2 from "../assets/person-2.png";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <main className="max-w-[1440px] mx-auto min-[855px]:px-[80px]">
                <section className="px-[32px] py-[96px] flex max-[855px]:flex-col-reverse justify-between gap-12">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-6xl font-bold">Hi, I'm Refan</span>
                            <span>
                            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                        </span>
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
                            <FiTwitter className="size-6"/>
                        </span>
                            <span className="size-9">
                            <FiFigma className="size-6"/>
                        </span>
                        </div>
                    </div>
                    <div className="max-[855px]:self-center">
                        <div className="relative">
                            <img alt="me" src={Person}
                                 className="w-[280px] h-[320px] max-[855px]:w-[240px] max-[855px]:h-[280px] absolute bottom-10 right-10 max-[855px]:left-5 max-[855px]:bottom-5"/>
                            <div className="w-[280px] h-[320px] max-[855px]:h-[280px] bg-gray-200"></div>
                        </div>
                    </div>
                </section>
                <section
                    className="px-[32px] py-[96px] flex flex-col items-center gap-12">
                    <span className="bg-gray-200 w-fit text-[14px] rounded-xl px-5 py-1">About me</span>
                    <div className="flex max-[855px]:flex-col max-[855px]:items-center gap-12">
                        <div className="relative">
                            <img src={Person2} alt="me" className="w-[400px] h-[480px] absolute z-10 max-[855px]:w-[280px] max-[855px]:h-[360px]"/>
                            <div className="w-[400px] h-[480px] bg-gray-200 top-5 relative right-5 z-0 max-[855px]:w-[320px] max-[855px]:h-[360px]"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="text-3xl font-semibold">Curious about me? Here you have it:</span>
                            <div className="flex flex-col gap-4">
                                <p>
                                    I'm a passionate, self-proclaimed designer who specializes in full stack development
                                    (React.js & Node.js). I am very enthusiastic about bringing the technical and visual
                                    aspects of digital products to life. User experience, pixel perfect design, and
                                    writing
                                    clear, readable, highly performant code matters to me.
                                </p>
                                <p>
                                    I began my journey as a web developer in 2015, and since then, I've continued to
                                    grow
                                    and evolve as a developer, taking on new challenges and learning the latest
                                    technologies
                                    along the way. Now, in my early thirties, 7 years after starting my web development
                                    journey, I'm building cutting-edge web applications using modern technologies such
                                    as
                                    Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                                </p>
                                <p>
                                    I am very much a progressive thinker and enjoy working on products end to end, from
                                    ideation all the way to development.
                                </p>
                                <p>
                                    When I'm not in full-on developer mode, you can find me hovering around on twitter
                                    or on
                                    indie hacker, witnessing the journey of early startups or enjoying some free time.
                                    You
                                    can follow me on Twitter where I share tech-related bites and build in public, or
                                    you
                                    can follow me on GitHub.
                                </p>
                                <p>
                                    Finally, some quick bits about me.
                                </p>
                                <ul className="list-disc list-outside grid grid-cols-2 ms-5">
                                    <li>B.E in Computer Engineering</li>
                                    <li>Full time freelancer</li>
                                    <li>Avid learner</li>
                                    <li>Aspiring indie hacker</li>
                                </ul>
                                <p>
                                    One last thing, I'm available for freelance work, so feel free to reach out and say
                                    hello! I promise I don't bite 😉
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;