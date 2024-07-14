import PrimaryButton from "../Button";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoHtml5,
} from 'react-icons/io';

export default function Header() {
  
  return (
    <div
      style={{
        backgroundImage: "url('/assets/img/header-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right"
      }}
      className="lg:h-screen py-24 px-4"
    >
      <div className="lg:h-full flex flex-col lg:w-1/2">
        <div className="lg:m-auto mx-auto flex flex-col lg:items-end">
          <div className="flex gap-2 text-2xl mb-2">
            <a 
              className="hover:scale-110 transition-all cursor-pointer"
              href="https://www.linkedin.com/in/gustavo-cardoso-souza/" target="_blank"
            >
              <IoLogoLinkedin className="text-cyan-primary"/>
            </a>
            
            <a 
              className="hover:scale-110 transition-all cursor-pointer"
              href="https://github.com/gustavocsouza" target="_blank"
            >
              <IoLogoGithub className="text-pink-primary"/>
            </a>
          </div>

          <h1 className="text-5xl font-light">
            Gustavo Cardoso
          </h1>
          <h2 className="text-lg font-thin tracking-widest uppercase mb-8">
            Front-end developer
          </h2>

          <PrimaryButton tailwindStyle={'text-center'} className="text-center" href="#projects">
            Projetos
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
