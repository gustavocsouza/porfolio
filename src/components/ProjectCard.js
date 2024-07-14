import Image from "next/image"

export default function ProjectCard() {
  return (
    <div className="relative">
      <div 
      className="h-80 w-60 rounded-3xl border shadow-border-shadow animate-pulse absolute"
      >
      </div>
      <div className="h-80 w-60 flex flex-col items-center">
        <Image 
          src={'/assets/img/rick-and-morty.jpg'}
          alt="Rick and Morty Characters List"
          width={240}
          height={360}
          className="rounded-t-3xl"
        />
        <h4>Rick and Morty API</h4>
      </div>
    </div>
  )
}
