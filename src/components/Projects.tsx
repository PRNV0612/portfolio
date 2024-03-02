import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

import { guardians } from "@/assets";
import { buttonVariants } from "./ui/Button";


const Projects = () => {
  return (
    <section className="view-container mt-24">
      <SectionTitle badges={["game dev", "dev"]}>Selected Projects</SectionTitle>
      <div className="space-y-8">
        
        <ProjectCard
          title="Guardians of the Galaxy - Space Game"
          scope="Gaming"
          description="Guardians of the Galaxy is a simple command line game made entirely on python using pygame module."
          image={guardians}
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
