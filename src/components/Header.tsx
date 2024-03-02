import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";

const Header = () => {
  return (
    <header className="view-container mt-16 md:mt-20">
      <p className="font-mono text-primary-light text-base md:text-xl">
        Hi, I'm Pranav Raj.
      </p>
      <h1 className="font-semibold text-[34px] md:text-5xl lg:text-[66px] flex flex-col mt-5 leading-snug">
        <span className="text-muted-white-2">I am a DevOps Engineer</span>
        <span className="text-muted-white-1 md:mt-2">
          with a passion for Hacking.
        </span>
      </h1>
      <p className="max-w-xl text-base lg:text-xl text-muted-foreground mt-10 leading-normal">
      I'm a computer engineering student at VIT Vellore, fascinated by technology and the wonders of engineering. Cybersecurity is my passion, and I'm diving into the world of DevOps. I love learning new things and am always up for a challenge in the ever-changing tech world.
      </p>
      <div className="flex gap-5 mt-10">
        <Link
          href="mailto:pranraj1506@gmail.com"
          className={buttonVariants({})}
        >
          Say Hello
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "default" })}
          href="https://drive.google.com/drive/folders/1gitoOnlhqtBX2bASsBDCN_Bp3M828HQA?usp=drive_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
