import localFont from "next/font/local";

export const nanumSquare = localFont({
  src: [{
    path: "./fonts/NanumSquareL.ttf",
    weight: "100 300",
    style: "normal",
  }, {
    path: "./fonts/NanumSquareR.ttf",
    weight: "400 600",
    style: "normal",
  }, {
    path: "./fonts/NanumSquareB.ttf",
    weight: "700 800",
    style: "normal",
  }, {
    path: "./fonts/NanumSquareEB.ttf",
    weight: "900",
    style: "normal",
  }],
});

export const nanumMyeongjo = localFont({
  src: [{
    path: "./fonts/NanumMyeongjo.otf",
    weight: "100 300",
    style: "normal",
  }, {
    path: "./fonts/NanumMyeongjoBold.otf",
    weight: "400 600",
    style: "normal",
  }, {
    path: "./fonts/NanumMyeongjoExtraBold.otf",
    weight: "700 900",
    style: "normal",
  }],
});
