import { useState } from "react";
import Image from "next/image";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

export type ArtworkDetailType = { type: 'image' | 'video', src: string, alt: string };

const moveButtonStyle = `border-2 border-main-gray text-main-gray
  disabled:border-main-gray100 disabled:text-main-gray100
  w-10 h-10 md:w-[62px] md:h-[62px] active:bg-main-gray100
  rounded-full flex justify-center items-center disabled:cursor-not-allowed
  absolute -bottom-12 md:static md:bottom-auto`;

const chevronIconStyle = `w-5 h-5 lg:w-auto lg:h-auto`;

type Props = {
  artworkDetails: ArtworkDetailType[];
}

export default function ArtworkDetail({ artworkDetails }: Props) {

  const [currentDetailIndex, setCurrentDetailIndex] = useState<number>(0);
  const currentDetail = artworkDetails[currentDetailIndex];
  const canMovePrev = currentDetailIndex > 0;
  const canMoveNext = currentDetailIndex < artworkDetails.length - 1;

  const viewPortWidth = window.innerWidth;
  const iframeWidth = viewPortWidth < 1024 ? viewPortWidth : 1320;
  const iframeHeight = 915 * iframeWidth / 1320;

  if (!currentDetail) return null;

  return (
    <div className="flex items-center gap-[30px] relative">
      <button
        className={`${moveButtonStyle} left-[30px] lg:left-auto`}
        onClick={() => setCurrentDetailIndex(currentDetailIndex - 1)}
        disabled={!canMovePrev}>
        <ChevronLeft className={chevronIconStyle} />
      </button>
      {currentDetail.type === 'image' && <Image src={currentDetail.src} alt={currentDetail.alt} width={1320} height={915} className="w-full lg:w-[1320px]" />}
      {currentDetail.type === 'video' && <iframe src={currentDetail.src} width={iframeWidth} height={iframeHeight} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
      <button className={`${moveButtonStyle} right-[30px]`}
        onClick={() => setCurrentDetailIndex(currentDetailIndex + 1)}
        disabled={!canMoveNext}>
        <ChevronRight className={chevronIconStyle} />
      </button>
    </div>
  );
}

