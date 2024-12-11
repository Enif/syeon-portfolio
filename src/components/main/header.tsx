import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[108px] flex justify-center gap-11 items-center text-main-navy text-xl bg-white fixed z-10">
      <Link href="/#home">Home</Link>
      <Link href="/#about">About Me</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#artworks">Artworks</Link>
      <Link href="/#contact">Contact</Link>
    </div>
  );
}
