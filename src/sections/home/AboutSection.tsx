import Person2 from "../../assets/person-2.png";
import Badge from "../../components/Badge.tsx";

const AboutSection = () => {
    return (
        <section className="px-8 py-24 flex flex-col items-center gap-12">
            <Badge desc="About me"/>
            <div className="flex max-[855px]:flex-col max-[855px]:items-center gap-12">
                <div className="relative">
                    <img src={Person2} alt="me"
                         className="w-[300px] h-[480px] absolute z-10 max-[855px]:w-[200px] max-[855px]:h-[360px]"/>
                    <div
                        className="w-[300px] h-[480px] bg-gray-200 top-5 relative right-5 z-0 max-[855px]:w-[240px] max-[855px]:h-[360px]"></div>
                </div>
                <div className="flex flex-col gap-6 ">
                    <span className="text-3xl font-semibold">Curious about me? Here you have it:</span>
                    <div className="flex flex-col gap-4">
                        <p>
                            I am a fullstack developer. Technologies that I have used include react, spring boot, react
                            native, kotlin, and jetpack compose. I am interested in learning this because I want to
                            create applications that are useful for other people.
                        </p>
                        <p>
                            I got to know the world of programming when vocational high school started in 2017. I
                            majored in software engineering. When I was studying programming at vocational school, I
                            wasn't very serious and there were still many things I didn't know. When I entered college,
                            I started to get serious about learning programming and I found my passion, namely mobile
                            application development. For now I want to focus on Android applications. If there is
                            another opportunity I am interested in learning IOS.
                        </p>
                        <p>

                            I enjoy learning new things related to technology. Therefore, I like to take coding training
                            because I will gain new knowledge, relationships, and learn to adapt. Even though I
                            currently have no work experience, I will continue to try to learn.
                        </p>
                        <p>
                            I personally tend to be introverted but I don't like being lonely.  I prefer to listen to people talk.
                        </p>
                        <p>
                            Finally, some quick bits about me.
                        </p>
                        <ul className="list-disc list-outside grid grid-cols-2 ms-5">
                            <li>B.E in Computer Engineering</li>
                            <li>Likes learning new things</li>
                            <li>Likes new environments</li>
                            <li>Sometimes I can speak in public, sometimes I can't</li>
                        </ul>
                        <p>
                            One last thing, I'm available for freelance work, so feel free to reach out and say
                            hello!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;