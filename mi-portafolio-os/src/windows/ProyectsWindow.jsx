import {useEffect, useContext} from "react";
import Window from "../components/Window";  
import Proyect from "../components/Proyect"
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";
import SkillGrid from "../components/SkillGrid";


function ProyectsWindow({ zIndex }) {   
    const { closeWindow, bringToFront } = useContext(WindowContext);    

    return (
        <Window
            title="work"
            zIndex={zIndex}
            onClose={() => closeWindow("work")}
            onFocus={() => bringToFront("work")}
        >
            <h3 style= {{ 
                marginTop: "2rem",
                fontWeight:"bold",
                fontSize: "1.5rem"}}>
                    Tech Stack 
            </h3>
            <SkillGrid/>


            <Proyect
            title="SOL Store"
            description="Tienda e-commerce con sistema de inventario, autenticación de usuarios y administración con Laravel y Vue.js."
            tech="Laravel, Vue, PostgreSQL, Docker, Blade, PHP, CSS, JavaScript, "
            link="https://github.com/Vann06/sol-store-ecommerce"
            image="https://res.cloudinary.com/dxjrdqbio/image/upload/v1748287884/14e75f3a-1b1f-430e-ab03-ff1e50b35903.png"
            />

            <Proyect
            title="Miniso E-commerce"
            description="E-commerce de Miniso con carrito de compras, autenticación de usuarios y administración de productos usando MERN stack."
            tech="React, JavaScript, CSS, HTML, MongoDB, Node.js, Express"
            link="https://github.com/Vann06/miniso-ecommerce"
            image="https://res.cloudinary.com/dxjrdqbio/image/upload/v1748288111/79eb48d3-54f8-4071-9501-d0a8a915fc2b.png"
            />

            <Proyect
            title="Tuto!"
            description="Aplicación móvil para encontrar tutores y clases particulares, desarrollada tanto para tutores como para estudiantes"
            tech="Android Studio, Kotlin"
            link="https://github.com/Vann06/TutorMatch"
            image=""
            />

            
        </Window>

    );
}

export default ProyectsWindow;