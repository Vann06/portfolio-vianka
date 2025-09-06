import {useEffect, useContext} from "react";
import Window from "../components/Window";  
import Proyect from "../components/Proyect"
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";
import SkillGrid from "../components/SkillGrid";
import { useTranslation } from 'react-i18next';


function ProyectsWindow({ zIndex }) {   
    const { closeWindow, bringToFront } = useContext(WindowContext);    
    const { t } = useTranslation();

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
            {t('projects.stackTitle')}
            </h3>
            <SkillGrid/>


                        <Proyect
                            title={t('projects.items.sol.title')}
                            description={t('projects.items.sol.description')}
                            tech={t('projects.items.sol.tech')}
                            link="https://github.com/Vann06/sol-store-ecommerce"
                            image="https://res.cloudinary.com/dxjrdqbio/image/upload/v1748287884/14e75f3a-1b1f-430e-ab03-ff1e50b35903.png"
                        />

                        <Proyect
                            title={t('projects.items.miniso.title')}
                            description={t('projects.items.miniso.description')}
                            tech={t('projects.items.miniso.tech')}
                            link="https://github.com/Vann06/miniso-ecommerce"
                            image="https://res.cloudinary.com/dxjrdqbio/image/upload/v1748288111/79eb48d3-54f8-4071-9501-d0a8a915fc2b.png"
                        />

                        <Proyect
                            title={t('projects.items.tuto.title')}
                            description={t('projects.items.tuto.description')}
                            tech={t('projects.items.tuto.tech')}
                            link="https://github.com/Vann06/TutorMatch"
                            image="https://res.cloudinary.com/dxjrdqbio/image/upload/v1748960260/af42c515-2fd7-4a9d-8dee-fad3a11502b5.png"
                        />

            
        </Window>

    );
}

export default ProyectsWindow;