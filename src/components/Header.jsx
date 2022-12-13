import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import styles from '../css/Header.module.css';

export default function Header({tabs, tabChanger}){
    const {darkModeToggle, darkMode} = useDarkMode();
    
    const selectHandler = (e) => {
        tabChanger(e.target.textContent);
    }
    function darkModeHandler(){
        darkModeToggle();
    }

    return(
        <div className={styles.header}>
            <button onClick={darkModeHandler}>{darkMode ? <MdLightMode color="var(--color-text)" /> : <MdDarkMode />}</button> 
            <ul>
                {
                    tabs.map((tab, key) => {
                        return <li className={tab.selected ? styles.selected : ""} onClick={selectHandler} key={key}>{tab.name}</li>
                    })
                }
            </ul>
        </div>
    );
};