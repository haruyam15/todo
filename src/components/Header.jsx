import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTodo } from "../context/TodoListContext";
import styles from '../css/Header.module.css';

export default function Header(){
    const {setTab, tabs, darkModeToggle, darkMode} = useTodo();
    
    const selectHandler = (e) => {
        setTab(e.target.textContent);
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
                        return <li className={tab.selected ? styles.selected : undefined} onClick={selectHandler} key={key}>{tab.name}</li>
                    })
                }
            </ul>
        </div>
    );
};