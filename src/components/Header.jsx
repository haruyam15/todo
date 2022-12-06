import { useContext, useState } from "react";
import { MdDarkMode } from "react-icons/md"; //MdLightMode
import { TodoListContext } from "../context/TodoListContext";
import styles from '../css/Header.module.css';

export default function Header(){
    const tabs = ['All', 'Active', 'Completed']
    const [selectedTab, setSelectedTab] = useState('All');
    const selectHandler = (e) => {
        setSelectedTab(e.target.textContent);

    }

    return(
        <div className={styles.header}>
            <button><MdDarkMode /></button> 
            <ul>
                {
                    tabs.map((tab) => {
                        return <li className={tab === selectedTab ? styles.selected : ""} onClick={selectHandler}>{tab}</li>
                    })
                }
                
            </ul>
        </div>
    );
};