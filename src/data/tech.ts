import type { Tech } from "../types/Tech";

import html_icon from "../components/icons/techs/html-icon.svg";
import css_icon from "../components/icons/techs/css-icon.svg";
import tailwind_icon from "../components/icons/techs/tailwind-icon.svg";
import js_icon from "../components/icons/techs/js-icon.svg";
import ts_icon from "../components/icons/techs/ts-icon.svg";
import react_icon from "../components/icons/techs/react-icon.svg";
import nextjs_icon from "../components/icons/techs/next-icon.svg";
import astro_icon from "../components/icons/techs/astro-icon.svg";
import zustand_icon from "../components/icons/techs/zustand-icon.svg";
import redux_icon from "../components/icons/techs/redux-icon.svg";
import node_icon from "../components/icons/techs/node-icon.svg";
import express_icon from "../components/icons/techs/express-icon.svg";
import vitest_icon from "../components/icons/techs/vitest-icon.svg";
import sql_icon from "../components/icons/techs/sql-icon.svg";
import postgresql_icon from "../components/icons/techs/postgre-icon.svg";
import supabase_icon from "../components/icons/techs/supabase-icon.svg";
import redis_icon from "../components/icons/techs/redis-icon.svg";
import figma_icon from "../components/icons/techs/figma-icon.svg";
import github_icon from "../components/icons/techs/github-icon.svg";

const converse = (svg: any) => svg.src;

export const techs: Tech[] = [
    { name: "HTML", icon: converse(html_icon), color: "#F16529" },
    { name: "CSS", icon: converse(css_icon), color: "#2965F1" },
    { name: "Tailwind", icon: converse(tailwind_icon), color: "#38BDF8" },
    { name: "Javascript", icon: converse(js_icon), color: "#F7DF1E" },
    { name: "Typescript", icon: converse(ts_icon), color: "#3178C6" },
    { name: "React", icon: converse(react_icon), color: "#61DAFB" },
    { name: "NextJs", icon: converse(nextjs_icon), color: "#ffffff" },
    { name: "Astro", icon: converse(astro_icon), color: "#FF5D01" },
    { name: "Zustand", icon: converse(zustand_icon), color: "#ffffff" },
    { name: "Redux", icon: converse(redux_icon), color: "#764ABC" },
    { name: "NodeJs", icon: converse(node_icon), color: "#539E43" },
    { name: "ExpressJs", icon: converse(express_icon), color: "#ffffff" },
    { name: "Vitest", icon: converse(vitest_icon), color: "#729B1B" },
    { name: "SQL", icon: converse(sql_icon), color: "#00bcf2" },
    { name: "PostgreSQL", icon: converse(postgresql_icon), color: "#336791" },
    { name: "Supabase", icon: converse(supabase_icon), color: "#3ECF8E" },
    { name: "Redis", icon: converse(redis_icon), color: "#D82C20" },
    { name: "Figma", icon: converse(figma_icon), color: "#F24E1E" },
    { name: "GitHub", icon: converse(github_icon), color: "#ffffff" }
];
