import type { Project } from "../types/Project";
import shopzone from "../../public/pics/projects/shopzone.jpeg";
import shopzone2 from "../../public/pics/projects/shopzone2.jpeg";
const img_test = shopzone.src;
const img_test2 = shopzone2.src;

export const projects: Project[] = [
    {
        id: 1,
        img: img_test,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
    {
        id: 2,
        img: img_test2,
        img_mobile: img_test,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend"
    },
    {
        id: 3,
        img: img_test2,
        img_mobile: img_test,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
    {
        id: 4,
        img: img_test,
        title: "Shopzone",
        description: "E-commerce ficticio que utiliza una API falsa de productos para gestionar un carrito de compras. Incluye pasarela de pago y está desplegado en Netlify, utilizando funciones serverless para la integración con Mercado Pago.",
        stack: ["Vite", "React", "Javascript"],
        type: "Frontend",
        deploy_link: "https://shopzonestore.netlify.app/"
    },
];