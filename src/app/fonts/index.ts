import localFont from "next/font/local";

export const nanumSquare = localFont({
  src: [{
    path: "./NanumSquareL.ttf",
    weight: "100 300",
    style: "normal",
  }, {
    path: "./NanumSquareR.ttf",
    weight: "400 600",
    style: "normal",
  }, {
    path: "./NanumSquareB.ttf",
    weight: "700 800",
    style: "normal",
  }, {
    path: "./NanumSquareEB.ttf",
    weight: "900",
    style: "normal",
  }],
});

export const nanumMyeongjo = localFont({
  src: [{
    path: "./NanumMyeongjo.otf",
    weight: "100 300",
    style: "normal",
  }, {
    path: "./NanumMyeongjoBold.otf",
    weight: "400 600",
    style: "normal",
  }, {
    path: "./NanumMyeongjoExtraBold.otf",
    weight: "700 900",
    style: "normal",
  }],
});
