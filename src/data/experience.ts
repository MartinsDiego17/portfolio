import { type Experience } from "../types/Experience";
import le_pain_logo from "../../public/works/lepain.svg";

export const experiences: Experience[] = [
    {
        id: 1,
        companyName: "Le Pain Quotidien",
        jobTitle: "Asistente de atención al cliente en aeropuerto",
        startDate: "Octubre 2024",
        endDate: "Septiembre 2025",
        description: "Durante mi experiencia en esta empresa, fortalecí *mis habilidades en comunicación*, *atención al cliente* y *manejo de puntos de venta*. Asimismo, optimicé mi *capacidad de comunicarme en otros idiomas* gracias a la interacción constante con pasajeros en un *entorno aeroportuario*.",
        skills: ["Comunicación asertiva", "Manejo de puntos de venta"],
        image: le_pain_logo
    },
    {
        id: 2,
        companyName: "La Barra Boulevard",
        jobTitle: "Mesero",
        startDate: "Noviembre 2023",
        endDate: "Marzo 2024",
        description: "Durante mi tiempo en La Barra Boulevard, desarrollé *habilidades en atención al cliente*, *servicio personalizado* y *trabajo en equipo*, asegurando *experiencias positivas para los clientes* y manteniendo un *ambiente organizado y eficiente* en el servicio de alimentos y bebidas.",
        skills: ["Atención al cliente", "Comunicación asertiva", "Manejo de pedidos y puntos de venta"]
    }
];
