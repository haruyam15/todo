import { useContext, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { TodoListContext } from "../context/TodoListContext";
import styles from '../css/Header.module.css';

export default function Header(){
    const {setTab, tabs, darkModeToggle, darkMode} = useContext(TodoListContext);
    
    const selectHandler = (e) => {
        setTab(e.target.textContent);
    }
    function darkModeHandler(){
        darkModeToggle();
    }


    return(
        <div className={`${styles.header} ${darkMode ? styles.darkMode : ""}`}>
            <button onClick={darkModeHandler}>{darkMode ? <MdLightMode color="#fff" /> : <MdDarkMode />}</button> 
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