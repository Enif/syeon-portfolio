import Image from "next/image";

export default function Main() {
  return (
    <main className="flex flex-col relative items-center h-[100vh] w-full">
      <Image
        className="dark:invert"
        src="/eescape/main.png"
        alt="main-image"
        fill
        priority
        style={{ objectFit: "cover", display: "block" }}
      />
      <div className="absolute top-[120px] left-[130px] flex flex-col gap-[20px]">
        <Image src="/eescape/logo.png" alt="logo" width={200} height={200} />
      </div>
    </main>
  );
}
