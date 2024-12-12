"use client"

import Image from "next/image";
import { useState } from "react";
import Modal from "~/components/modal";
import ArtworkDetail, { ArtworkDetailType } from "./artworkDetail";


type Artwork = {
  mainImage: string;
  title: string;
  authors?: string;
  description: string;
  details: ArtworkDetailType[];
}

const artworks: Artwork[] = [{
  mainImage: "/home/artworks/meta-gaia.jpg",
  title: "Meta-Gaia",
  authors: "(Group Project) Sooyeon Ahn, Minsun Kim, Geunyong Park, Stella Yolanda",
  description: `“Gaia, the first god who created the world, was followed by humans as Meta-Gaia.
                When the shadow of New God casts, the Earth is distorted.”
                Meta-Gaia visually explores the profound impact of human activities on Earth's ecosystems.
                It gracefully immerses viewers in a meditative and thought-provoking experience.`,
  details: [{ type: 'video', src: 'https://www.youtube.com/embed/_T8dzd3eagU?si=gi-uX96dY9ggQnDS&amp;controls=0', alt: 'Meta-Gaia Video' }],
}, {
  mainImage: "/home/artworks/boundary.jpg",
  title: "Boundary Project",
  description: `My self had separated into two distinct selves: the outer self and the inner self.
                The Boundary Project is the process of accepting both divided selves as part of me
                and eventually integrating them into one.`,
  details: [{
    type: 'video',
    src: 'https://www.youtube.com/embed/kBk8lsMYHSE?si=_orlbUPE83O8FgHH',
    alt: 'Boundary Detail 1'
  }, {
    type: 'image',
    src: '/home/artworks/boundary_detail_2.jpg',
    alt: 'Boundary Detail 2'
  }, {
    type: 'image',
    src: '/home/artworks/boundary_detail_3.jpg',
    alt: 'Boundary Detail 3'
  }, {
    type: 'image',
    src: '/home/artworks/boundary_detail_4.jpg',
    alt: 'Boundary Detail 4'
  }, {
    type: 'image',
    src: '/home/artworks/boundary_detail_5.jpg',
    alt: 'Boundary Detail 5'
  }],

}, {
  mainImage: "/home/artworks/inner_garden.jpg",
  title: "Inner Garden Project",
  description: `Inner Garden Project is the process of recognizing my hidden dark shadows.
                The ‘Inner Garden’ is an inner cozy space where I am able to meet my own inner self.
                My each inner self has been submerged in each room keeping with my hidden depression
                as a hard but soft stone, a faint but sparkling light, and a parched but living tree.`,
  details: [{
    type: 'video',
    src: 'https://www.youtube.com/embed/krZfeE0pm5U?si=PGr0YdliQ6Ehf31M',
    alt: 'Inner Garden Detail 1'
  }, {
    type: 'image',
    src: '/home/artworks/inner_garden_detail_2.jpg',
    alt: 'Inner Garden Detail 2'
  }, {
    type: 'image',
    src: '/home/artworks/inner_garden_detail_3.jpg',
    alt: 'Inner Garden Detail 3'
  }, {
    type: 'image',
    src: '/home/artworks/inner_garden_detail_4.jpg',
    alt: 'Inner Garden Detail 4'
  }, {
    type: 'image',
    src: '/home/artworks/inner_garden_detail_5.jpg',
    alt: 'Inner Garden Detail 5'
  }],
}, {
  mainImage: "/home/artworks/remember.jpg",
  title: "Remember Project",
  description: `My grandfather had suffered from a loss of memory.
                At his last moment, I was afraid of forgetting about him forever if I didn’t leave him in the picture.
                <Remember Project> is a project starting from my regret of not leaving my grandfather’s
                last in the picture, to try to remember him in a different way.`,
  details: [{
    type: 'image',
    src: '/home/artworks/remember_detail_1.jpg',
    alt: 'Remember Detail 1'
  }, {
    type: 'video',
    src: 'https://www.youtube.com/embed/T0rVGgqVhUg?si=R8SvBH-FLuERUO54',
    alt: 'Remember Detail 2'
  }, {
    type: 'image',
    src: '/home/artworks/remember_detail_3.jpg',
    alt: 'Remember Detail 3'
  }, {
    type: 'video',
    src: 'https://www.youtube.com/embed/YdOBrPByhXE?si=Jg5CREw5CXfKDG0-',
    alt: 'Remember Detail 4'
  }, {
    type: 'image',
    src: '/home/artworks/remember_detail_5.jpg',
    alt: 'Remember Detail 5'
  }, {
    type: 'image',
    src: '/home/artworks/remember_detail_6.jpg',
    alt: 'Remember Detail 6'
  }, {
    type: 'image',
    src: '/home/artworks/remember_detail_7.jpg',
    alt: 'Remember Detail 7'
  }, {
    type: 'image',
    src: '/home/artworks/remember_detail_8.jpg',
    alt: 'Remember Detail 8'
  }],

}, {
  mainImage: "/home/artworks/the_gap.jpg",
  title: "The Gap",
  description: `No matter how we try to reach each other, there is an unreachable gap between us. 
                My closest others(friends and family) and I stand face to face, and there is a thin, white fabric between us.
                We sew a Korean word, ‘틈,’ which means a gap, to visualize a space where we felt for each other on white fabric. 
                The gap is a space where sometimes is been apart, sometimes is been closely, and sometimes is been in a tangle.`,
  details: [{
    type: 'image',
    src: '/home/artworks/the_gap_detail_1.jpg',
    alt: 'The Gap Detail 1'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_2.jpg',
    alt: 'The Gap Detail 2'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_3.jpg',
    alt: 'The Gap Detail 3'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_4.jpg',
    alt: 'The Gap Detail 4'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_5.jpg',
    alt: 'The Gap Detail 5'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_6.jpg',
    alt: 'The Gap Detail 6'
  }, {
    type: 'image',
    src: '/home/artworks/the_gap_detail_7.jpg',
    alt: 'The Gap Detail 7'
  }],
}, {
  mainImage: '/home/artworks/not_to_be_erased.jpg',
  title: 'Not to be Erased',
  description: `In the history of the war, there are countless people who were disappeared under the shadow of the hero.
                  History do not record them even if each of them has their own valuable and precious.
                  In the ‘Not to be Erased,’ I tried to express the pain of about 352,862 people
                  disappeared by the war as inscribing them one by one with my hands.`,
  details: [{
    type: 'image',
    src: '/home/artworks/not_to_be_erased_detail_1.jpg',
    alt: 'Not to be Erased Detail 1'
  }, {
    type: 'image',
    src: '/home/artworks/not_to_be_erased_detail_2.jpg',
    alt: 'Not to be Erased Detail 2'
  }, {
    type: 'image',
    src: '/home/artworks/not_to_be_erased_detail_3.jpg',
    alt: 'Not to be Erased Detail 3'
  }, {
    type: 'image',
    src: '/home/artworks/not_to_be_erased_detail_4.jpg',
    alt: 'Not to be Erased Detail 4'
  }],
}]

export default function Artworks() {

  const [details, setDetails] = useState<ArtworkDetailType[] | null>(null);

  return (
    <div id="artworks" className="flex justify-center">
      <div className="w-[1052px] flex flex-col gap-10">
        <h2 className="text-main-navy text-3xl font-extrabold tracking-widest">ARTWORKS</h2>
        {
          artworks.map((artwork) => (
            <div key={artwork.title} className="relative group">
              <Image src={artwork.mainImage} width={1052} height={450} alt={artwork.title} />
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-28 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="text-[2rem] font-extrabold">{artwork.title}</h3>
                {artwork.authors && <p className="text-xs">{artwork.authors}</p>}
                <p className="text-[15px] text-center whitespace-pre-wrap">{artwork.description}</p>
                <button className="py-2 px-4 rounded-3xl border border-white" onClick={() => setDetails(artwork.details)}>+ View Details</button>
                {details && (<Modal>
                  <div className="flex flex-col gap-6">
                    <button className="flex items-center gap-2 ml-auto font-bold text-main-gray text-2xl" onClick={() => setDetails(null)}><Image src='/home/icons/close.svg' width={20} height={20} alt="close_icon" />Close</button>
                    <ArtworkDetail artworkDetails={details} />
                  </div>
                </Modal>)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}