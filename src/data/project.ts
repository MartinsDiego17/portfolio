import type { Project } from "../types/Project";

import shopzone from "../../public/pics/projects/shopzone_desktop.jpeg";
import shopzone_mobile from "../../public/pics/projects/shopzone_mobile.jpeg";
import yourhiring_mobile from "../../public/pics/projects/yourhiring_mobile.jpeg";
import yourhiring_desktop from "../../public/pics/projects/yourhiring_desktop.jpeg";


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
        img: shopzone_mobile.src,
        img_mobile: shopzone.src,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
    {
        id: 4,
        img: shopzone.src,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
];