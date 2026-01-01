import { PHOTOS } from "./consts/photos";
import { generateContinousImageNames } from "./utils";

export const BRAND_NAME = "Marry Gold Films";

export const SERVICES = [
  {
    title: "Christian wedding",
    image: PHOTOS.OUR_SERVICES[0],
    position: "object-[50%_10%]",
  },
  {
    title: "Hindu Wedding",
    image: PHOTOS.OUR_SERVICES[1],
    position: "object-top",
  },
  {
    title: "Muslim wedding",
    image: PHOTOS.OUR_SERVICES[2],
    position: "position: object-[50%_35%]",
  },
  {
    title: "Pre wedding",
    image: PHOTOS.OUR_SERVICES[3],
    position: "object-top",
  },
  {
    title: "Intimate Wedding",
    image: PHOTOS.OUR_SERVICES[4],
  },
  {
    title: "Destination Wedding",
    image: PHOTOS.OUR_SERVICES[5],
  },
];

export const LATEST_PROJECTS = [
  {
    id: "07",
    client: "VINU & SNEHA",
    image:
      "/assets/images/christian-wedding/VINU & SNEHA/AE9AB7D9-9D35-4163-B9C6-A826643D7F79.webp",
    all_images: [
      "/assets/images/christian-wedding/VINU & SNEHA/0E5CE4F1-CEC0-433E-B546-CAA8E7BFC583.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/4F7B760B-2B70-4BFE-94FC-164B0EB84E3E.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/7BFBA492-94CA-4B72-985F-71FBC9BFF88A.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/545F4D54-74FA-4D72-8F67-3871007BC1A8.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/AE9AB7D9-9D35-4163-B9C6-A826643D7F79.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/B114CA70-4D68-4355-8605-DFB0938D6D88.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/C5C1C167-B6F3-4A64-93EF-7C88A4F7CE0B.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/DAC4EE76-331A-4436-9D00-8FAEE57F069C.webp",
      "/assets/images/christian-wedding/VINU & SNEHA/E150F7B5-DC92-4FAD-A258-9594408404C9.webp",
    ],
  },
  {
    id: "01",
    client: "Albin & Rini",
    image: "/assets/images/christian-wedding/albin-rini/albin-rini-1.webp",
    all_images: generateContinousImageNames(
      "/assets/images/christian-wedding/albin-rini",
      5849,
      5861
    ),
  },
  {
    id: "02",
    client: "ASHOK & BENNITA",
    image: "/assets/images/christian-wedding/ASHOK & BENNITA/IMG_9680.webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/ASHOK & BENNITA",
        9678,
        9684
      ),
      "/assets/images/christian-wedding/ASHOK & BENNITA/IMG_9689.webp",
      "/assets/images/christian-wedding/ASHOK & BENNITA/IMG_9695.webp",
    ],
  },
  {
    id: "03",
    client: "DAVID & ALISHA",
    image: "/assets/images/christian-wedding/DAVID & ALISHA/IMG_3286.webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/DAVID & ALISHA",
        3283,
        3291
      ),
      "/assets/images/christian-wedding/DAVID & ALISHA/IMG_3294.webp",
    ],
  },
  {
    id: "04",
    client: "JITHIN & ALEETA",
    image: "/assets/images/christian-wedding/JITHIN & ALEETA/IMG_6510.webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/JITHIN & ALEETA",
        6498,
        6500
      ),
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/JITHIN & ALEETA",
        6502,
        6510
      ),
    ],
  },
  {
    id: "05",
    client: "KIRAN & RACHEL",
    image: "/assets/images/christian-wedding/KIRAN & RACHEL/IMG_6305.webp",
    all_images: [
      "/assets/images/christian-wedding/KIRAN & RACHEL/IMG_6298.webp",
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/KIRAN & RACHEL",
        6300,
        6308
      ),
    ],
  },
  {
    id: "06",
    client: "NELDA & ROMARIO",
    image: "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08804.webp",
    all_images: [
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08771.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08775.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08778.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08788.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08804.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08807.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08822.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08840.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08849.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08859.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08931.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI08962.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI09057.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI09097.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ANI09591.webp",
      "/assets/images/christian-wedding/NELDA & ROMARIO/ED_00838.webp",
    ],
  },
  {
    id: "08",
    client: "REYON",
    image: "/assets/images/christian-wedding/REYON/a (6).webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/christian-wedding/REYON",
        1,
        6,
        "a (",
        ")"
      ),
    ],
  },
  {
    id: "09",
    client: "AISWARYA & RAKESH",
    image: "/assets/images/hindu-wedding/AISWARYA & RAKESH/IMG_4975.webp",
    all_images: [
      "/assets/images/hindu-wedding/AISWARYA & RAKESH/IMG_4968.webp",
      ...generateContinousImageNames(
        "/assets/images/hindu-wedding/AISWARYA & RAKESH",
        4970,
        4977
      ),
    ],
  },
  {
    id: "10",
    client: "AISWARYA & VISWAJITH",
    image: "/assets/images/hindu-wedding/AISWARYA & VISWAJITH/A (9).webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/hindu-wedding/AISWARYA & VISWAJITH",
        1,
        11,
        "A (",
        ")"
      ),
    ],
  },
  {
    id: "11",
    client: "DARSHAN & SELNA",
    image: "/assets/images/hindu-wedding/DARSHAN & SELNA/IMG_6458.webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/hindu-wedding/DARSHAN & SELNA",
        6457,
        6464
      ),
    ],
  },
  {
    id: "12",
    client: "RINI & VISHNU",
    image: "/assets/images/hindu-wedding/RINI & VISHNU/in_ (1).webp",
    all_images: [
      ...generateContinousImageNames(
        "/assets/images/hindu-wedding/RINI & VISHNU",
        1,
        6,
        "in_ (",
        ")"
      ),
    ],
  },
];
