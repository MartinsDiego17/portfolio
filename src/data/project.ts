import type { Project } from "../types/Project";

import shopzone from "../../public/pics/projects/shopzone_desktop.jpeg";
import shopzone_mobile from "../../public/pics/projects/shopzone_mobile.jpeg";

import yourhiring_mobile from "../../public/pics/projects/yourhiring_mobile.jpeg";
import yourhiring_desktop from "../../public/pics/projects/yourhiring_desktop.jpeg";

import zaporta_mobile from "../../public/pics/projects/zaporta_mobile.jpeg";
import zaporta_desktop from "../../public/pics/projects/zaporta_desktop.jpeg";

import pulsetech_mobile from "../../public/pics/projects/pulsetech_mobile.jpeg";
import pulsetech_desktop from "../../public/pics/projects/pulsetech_desktop.jpeg";


export const projects: Project[] = [
    {
        id: 1,
        img: shopzone.src,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
    {
        id: 2,
        img: yourhiring_mobile.src,
        img_mobile: yourhiring_desktop.src,
        title: "YourHiring",
        description: "YourHiring es una plataforma de gestión de postulaciones laborales que cuenta con un sistema que le permite a cada usuario personalizar y optimizar su búsqueda laboral.",
        stack: ["Astro", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://your-hiring.vercel.app/"
    },
    {
        id: 3,
        img: zaporta_mobile.src,
        img_mobile: zaporta_desktop.src,
        title: "Landing page promocional",
        description: "Landing page destinada a promocionar los conocimientos y servicios de un entrenador personal, destacando su experiencia, especialidades y facilitando el contacto con potenciales clientes.",
        stack: ["Astro", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://santi-zaporta.vercel.app/"
    },
    {
        id: 4,
        img: pulsetech_desktop.src,
        title: "Pulsetech",
        description: "Pulsetech es una plataforma que desarrollé hace un tiempo, cuando me dedicaba de manera freelance al diseño y venta de páginas web, ofreciendo soluciones personalizadas para emprendedores y profesionales.",
        stack: ["Astro", "React", "I18N"],
        type: "Frontend",
        deploy_link: "https://pulsetech-chi.vercel.app/"
    },
];