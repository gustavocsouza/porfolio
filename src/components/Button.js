export default function PrimaryButton({ href, children, tailwindStyle }) {
  return (
    <a 
      href={href} 
      className={`
        ${tailwindStyle}
        px-8 py-2 bg-gradient-to-r from-pink-primary to-cyan-primary 
        text-black rounded-full font-bold opacity-60 hover:opacity-100
        shadow-glow hover:shadow-hover-glow transition-all uppercase
      `}
    >
      {children}
    </a>
  )
}
