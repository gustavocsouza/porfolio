import PrimaryButton from "../Button";

export default function Header() {
  return (
    <div className="h-screen">
      <div className="align-middle justify-center text-center h-full flex flex-col w-1/2">
        <div className="w-3/2 text-right m-auto gap-2 flex flex-col items-end">
          <h1 className="text-5xl font-thin">
            Gustavo Cardoso
          </h1>
          <h2 className="text-2xl font-bold mb-8">
            Desenvolvedor Front-end
          </h2>
          <PrimaryButton/>
        </div>
      </div>
      <div className="w-1/2"></div>/
    </div>
  )
}
