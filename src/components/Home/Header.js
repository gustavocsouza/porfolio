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
      className="h-screen flex items-center"
    >
      <div className="align-middle justify-center text-center h-full flex flex-col w-[45%]">
        <div className="w-3/2 text-right m-auto gap-2 flex flex-col items-end">
          <div className="flex gap-2 text-2xl">
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
          <h1 className="text-5xl font-thin">
            Gustavo Cardoso
          </h1>
          <h2 className="text-2xl mb-8">
            Desenvolvedor Front-end
          </h2>
          <PrimaryButton href="#projects" />
        </div>
      </div>
    </div>
  )
}
