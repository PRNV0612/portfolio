import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

// Import your images
import guardians from "@/assets/guardians.png";
import hooterSandboxImage from "@/assets/Hooter.jpg";  // Add image for the Hooter Sandbox project
import homeFinderImage from "@/assets/HomeFinder.jpg";        // Add image for the HomeFinder project

import { buttonVariants } from "./ui/Button";


const Projects = () => {
  return (
    <section className="view-container mt-24">
      <SectionTitle badges={["game dev", "dev"]}>Selected Projects</SectionTitle>
      <div className="space-y-8">

        <ProjectCard
          title="Hooter Sandbox- A Containerized Malware Analysis Sandbox"
          scope="Development"
          description="A secure, containerized environment for automated malware analysis and behavioral monitoring."
          image={hooterSandboxImage} // Added image for Hooter Sandbox
          imageAlt="Hooter Sandbox banner"
          sourceLink="https://github.com/PRNV0612/Space-game"
          technologies={[
            "Python"
          ]}
        />

        <ProjectCard
          title="HomeFinder- A Real Estate App"
          scope="Web Development"
          description="A MERN stack-based real estate app with property listings, real-time chat, and advanced search features for seamless buying, selling, and renting experiences."
          image={homeFinderImage}  // Added image for HomeFinder
          imageAlt="HomeFinder banner"
          sourceLink="https://github.com/PRNV0612/Space-game"
          technologies={[
            "MERN Stack"
          ]}
        />

        <ProjectCard
          title="Guardians of the Galaxy - Space Game"
          scope="Gaming"
          description="Guardians of the Galaxy is a simple command line game made entirely on python using pygame module."
          image={guardians}  // Existing image for Guardians of the Galaxy
          imageAlt="Guardians banner"
          sourceLink="https://github.com/PRNV0612/Space-game"
          technologies={[
            "Python"
          ]}
        />

      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="grow border-t-2 border-muted-1 border-dashed"></div>
        <Link
          href="/work"
          className={buttonVariants({ variant: "outline", size: "default" })}
        >
          See all projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
