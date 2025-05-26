import {useEffect, useContext} from "react";
import Window from "../components/Window";  
import Proyect from "../components/Proyect"
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";



function ProyectsWindow({ zIndex }) {   
    const { closeWindow, bringToFront } = useContext(WindowContext);    

    return (
        <Window
            title="work"
            zIndex={zIndex}
            onClose={() => closeWindow("work")}
            onFocus={() => bringToFront("work")}
        >

            <Proyect
            title="SOL Store"
            description="Tienda e-commerce con sistema de inventario, autenticación de usuarios y administración con Laravel y Vue.js."
            tech="Laravel, Vue, PostgreSQL, Docker"
            link="https://github.com/Vann06/sol-store"
            />

            <Proyect
            title="Stadium Simulator"
            description="Simulador de concurrencia para reservas de asientos en un estadio usando Python y PostgreSQL."
            tech="Python, psycopg2, SQL, Streamlit"
            link="https://github.com/Vann06/stadium-concurrency"
            />

            <Proyect
            title="Portfolio OS"
            description="Escritorio interactivo con ventanas flotantes al estilo de un sistema operativo, modo oscuro y animaciones."
            tech="React, react-rnd, EmailJS, Cloudinary"
            link="https://github.com/Vann06/portfolio-os"
            />

            
        </Window>

    );
}

export default ProyectsWindow;