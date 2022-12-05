import { MdDarkMode } from "react-icons/md"; //MdLightMode
import styles from '../css/Header.module.css';

export default function Header(){
    return(
        <div className={styles.header}>
            <button><MdDarkMode /></button> 
            <ul>
                <li className={styles.active}>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        </div>
    );
};