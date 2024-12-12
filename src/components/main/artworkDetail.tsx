import { useState } from "react";
import Image from "next/image";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

export type ArtworkDetailType = { type: 'image' | 'video', src: string, alt: string };

type Props = {
  artworkDetails: ArtworkDetailType[];
}

export default function ArtworkDetail({ artworkDetails }: Props) {

  const [currentDetailIndex, setCurrentDetailIndex] = useState<number>(0);
  const currentDetail = artworkDetails[currentDetailIndex];
  const canMovePrev = currentDetailIndex > 0;
  const canMoveNext = currentDetailIndex < artworkDetails.length - 1;

  if (!currentDetail) return null;

  return (
    <div className="flex items-center gap-[30px]">
      <button className="border-2 border-main-gray text-main-gray disabled:border-main-gray100 disabled:text-main-gray100 w-[62px] h-[62px] rounded-full flex justify-center items-center" onClick={() => setCurrentDetailIndex(currentDetailIndex - 1)} disabled={!canMovePrev}>
        <ChevronLeft />
      </button>
      {currentDetail.type === 'image' && <Image src={currentDetail.src} alt={currentDetail.alt} width={1320} height={915} placeholder="blur" />}
      {currentDetail.type === 'video' && <iframe src={currentDetail.src} width={1320} height={915} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
      <button className="border-2 border-main-gray text-main-gray disabled:border-main-gray100 disabled:text-main-gray100 w-[62px] h-[62px] rounded-full flex justify-center items-center" onClick={() => setCurrentDetailIndex(currentDetailIndex + 1)} disabled={!canMoveNext}>
        <ChevronRight />
      </button>
    </div>
  );
}

