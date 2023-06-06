import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    alt: "product",
    category: "PC",
    image:
      "https://a-static.mlcdn.com.br/1500x1500/pc-gamer-easypc-completo-monitor-led-21-5-amd-quad-core-ryzen-3-2200g-3-7ghz-8gb-radeon-vega-8-graphics-1tb-mouse-teclado-headset/3greentechnology/22383/f8ad9946983995b34a3e8b959cce7851.jpg",
  },
  {
    _id: uuid(),
    alt: "product",
    category: "PS5",
    image:
      "https://th.bing.com/th/id/OIP.z1MIC13azIt-3uUBJqfK6AAAAA?pid=ImgDet&rs=1",
  },
  {
    _id: uuid(),
    alt: "product",
    category: "Xbox",
    image:
      "https://th.bing.com/th/id/OIP.ViwDaVj-hPWWlanSTNUdCgHaHa?pid=ImgDet&rs=1",
  }
];