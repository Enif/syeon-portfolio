export default function Contact() {
  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center gap-5 text-main-navy pb-20">
      <h2 className="text-base md:text-[1.75rem] font-extrabold">CONTACT</h2>
      <p className="text-xs md:text-xl mb-10">
        If you have any questions, feel free to contact me.
      </p>
      <a href="mailto:syeon.studio@gmail.com" className="border border-main-navy rounded-3xl text-sm md:text-xl px-10 py-2">
        Email to Sooyeon
      </a>
      <p className="text-xs md:text-lg">syeon.studio@gmail.com</p>
    </div>
  );
}

