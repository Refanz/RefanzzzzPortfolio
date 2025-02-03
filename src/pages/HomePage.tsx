import Navbar from "../components/Navbar.tsx";
import HeroSection from "../sections/home/HeroSection.tsx";
import AboutSection from "../sections/home/AboutSection.tsx";
import SkillSection from "../sections/home/SkillSection.tsx";
import ExperienceSection from "../sections/home/ExperienceSection.tsx";
import ProjectSection from "../sections/home/ProjectSection.tsx";
import ContactSection from "../sections/home/ContactSection.tsx";
import FooterSection from "../sections/home/FooterSection.tsx";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <main className="max-w-[1440px] mx-auto min-[855px]:px-[80px]">
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ExperienceSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>
            <FooterSection/>
        </>
    )
}

export default HomePage;