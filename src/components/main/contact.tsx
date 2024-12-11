export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 text-main-navy">
      <h2 className=" text-[1.75rem] font-extrabold">CONTACT</h2>
      <p className="text-xl mb-10">
        If you have any questions or want to collaborate with me, please feel free to contact me.
      </p>
      <div className="border border-main-navy rounded-3xl text-xl px-10 py-2">
        <a href="mailto:syeon.design@gmail.com">Email to Sooyeon</a>
      </div>
    </div>
  );
}

