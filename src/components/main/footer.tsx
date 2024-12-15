const FOOTER_TEXT = `@2024. Syeon. all right reserved.\nProgrammed by. Enif`;

export default function Footer() {
  return (
    <div className="w-full h-[150px] md:h-[250px] flex items-center justify-center text-main-navy text-[10px] md:text-lg bg-[#E0E9EF]">
      <p className="text-center whitespace-pre-wrap">
        {FOOTER_TEXT}
      </p>
    </div>
  );
}
