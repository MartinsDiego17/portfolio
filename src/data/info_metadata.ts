import type { Metadata } from "../types/Metadata";
const desc = "Diego Martins, software developer Full Stack, creando aplicaciones web modernas y escalables con React, Next.js y Node.js.";
import mockup from "../../public/pics/mockup.jpg";

export const info_metadata : Metadata = {
	description: desc,
    author: "Diego Martins",
    ogTitle: "DMGTech - Portfolio",
    ogDescription: desc,
    ogImage: mockup.src,
    ogType: "website"
};