import Image from "next/image"
import PrimaryButton from "./Button"

export default function ProjectCard() {
  return (
    <div className="relative">
      <div 
      className="h-80 w-60 rounded-3xl border shadow-border-shadow animate-pulse absolute"
      >
      </div>
      <div className="h-80 w-60 flex flex-col items-center justify-between pb-6">
        <Image 
          src={'/assets/img/rick-and-morty.jpg'}
          alt="Rick and Morty Characters List"
          width={240}
          height={360}
          className="rounded-t-3xl"
        />
        <h4>Rick and Morty API</h4>
        <p
          className="text-sm text-center font-thin"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum tenetur ab iure, nesciunt aut ullam exercitationem voluptatum. 
        </p>
      </div>
    </div>
  )
}
