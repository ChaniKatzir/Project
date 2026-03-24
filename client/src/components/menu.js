import React, { useState, createContext ,useContext} from "react";
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import Context from "./context/Context"
import { Image } from 'primereact/image';

const Menu = (props) => {
    const navigate = useNavigate();
    const arr = props.arr
    const icon = props.icon
    const command = props.navigate
    let items = []
    const context = useContext(Context);
    const [activeIndex, setActiveIndex] = useState();

    
    if (context.status == 1) {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        { label: arr[1], icon: icon[1], comand: command[1] },
        { label: arr[2], icon: icon[2], comand: command[2] },
        { label: arr[3], icon: icon[3], comand: command[3] },
        { label: arr[4], icon: icon[4], comand: command[4] },
        ]
    }

    else if (context.status == 2) {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        { label: arr[1], icon: icon[1], comand: command[1] },
        ]
    }

    else {
        items = [{ label: arr[0], icon: icon[0], comand: command[0] },
        ]
    }


    return (<>
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => { setActiveIndex(e.index);navigate(e.value.comand);}} />
            <Image src="./ytj.png" alt="Image" width="40%"/>
        </div>
    </>
    )
}
export default Menu;
