import { useContext, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md"; //MdLightMode
import { TodoListContext } from "../context/TodoListContext";
import styles from '../css/Header.module.css';

export default function Header(){
    const {setTab, tabs} = useContext(TodoListContext);
    const selectHandler = (e) => {
        setTab(e.target.textContent);
    }


    return(
        <div className={styles.header}>
            <button><MdDarkMode /></button> 
            <ul>
                {
                    tabs.map((tab, key) => {
                        return <li className={tab.selected === true ? styles.selected : null} onClick={selectHandler} key={key}>{tab.name}</li>
                    })
                }
            </ul>
        </div>
    );
};