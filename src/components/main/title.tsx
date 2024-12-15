type Props = {
  title: string;
  className?: string;
}

export default function Title({ title, className }: Props) {
  return <h2 className={`text-main-navy text-base md:text-3xl font-extrabold tracking-widest ${className ?? ''}`}>{title.toUpperCase()}</h2>
}