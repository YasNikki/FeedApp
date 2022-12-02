import { AppleLogo } from "phosphor-react";
import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://wallpapercave.com/wp/wp5510311.jpg" alt="" />
            <Avatar />

            <footer>
                <a href="#">
                    {/* <PencilLine size={20}/> */}
                    {/* <PencilLine size={20}/> */}
                    <AppleLogo size={20} />
                    
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    );
}