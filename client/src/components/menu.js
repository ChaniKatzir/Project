import React, { useState, createContext ,useContext} from "react";
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import Context from "./context/Context"

import { store } from '../store/status'
import { Provider } from 'react-redux'
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/status";
import { useSelector } from "react-redux";

const Menu = (props) => {
    const navigate = useNavigate();
    const arr = props.arr
    const icon = props.icon
    const command = props.navigate
    let items = []
    const context = useContext(Context);
    


    if (context.status == 1) {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        { label: arr[1], icon: icon[1], comand: command[1] },
        { label: arr[2], icon: icon[2], comand: command[2] },
        { label: arr[3], icon: icon[3], comand: command[3] },
        { label: arr[4], icon: icon[4], comand: command[4] },
        { label: arr[5], icon: icon[5], comand: command[5] },

        ]
    }

    else if (context.status == 2) {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        { label: arr[1], icon: icon[1], comand: command[1] },
        { label: arr[2], icon: icon[2], comand: command[2] },
        { label: arr[3], icon: icon[3], comand: command[3] },
        ]
    }

    else {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        { label: arr[1], icon: icon[1], comand: command[1] },
        ]
    }


    return (<>
        <div className="card">
            <TabMenu model={items} onTabChange={(e) => { navigate(e.value.comand) }} />
        </div>
    </>
    )
}
export default Menu;
