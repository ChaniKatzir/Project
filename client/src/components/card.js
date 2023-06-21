import React, { useState, useContext, useEffect, useRef } from "react";
import { useCrudFunctions } from "../hooks/useCrudFunctions";
import Context from "./context/Context"
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';

export default function CardA(props, index) {
    const [dataP, setDataP] = useState();
    const [dataS, setDataS] = useState();
    const [definitions, setDefinitions] = useState();
    const [attendance, setAttendance] = useState();

    const context = useContext(Context);
    const { putData, getData } = useCrudFunctions()

    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
        </div>
    );
    useEffect(() => {
        if (props.list && props.attend) {
            let data = [];
            props.list.forEach((element, index) => {
                data.push(element + " : " + props.attend[index])
            });
            console.log(data);
            setAttendance(data)
        }
    }, [])
    useEffect(() => {
        if (props.names && props.defin) {
            let data = [];
            props.names.forEach((element, index) => {
                if (element == "כתובת המייל")
                    data.push(props.defin[index] + " : " + element)
                else
                    data.push(element + " : " + props.defin[index])
            });
            setDefinitions(data)
        }
    }, [])
    useEffect(() => {
        if (props.p && props.s) {
            let values = Object.values(props.p)
            let keys = Object.keys(props.p)
            let datap = [], datas = []
            keys.forEach((key, index) => {
                if (key == "מייל")
                    datap.push(values[index] + " : " + key)
                else
                    datap.push(key + " : " + values[index])
            }
            );
            values = Object.values(props.s)
            keys = Object.keys(props.s)
            keys.forEach((key, index) =>
                datas.push(key + " :" + values[index]));

            setDataP(datap);
            setDataS(datas);
        }
    }, []);

    return ( (

        <div className="card flex justify-content-center">
            {
                attendance?
                <>{console.log("hiiiiii")}
                    <Card kea={index} title={props.title} className="cardA" id="card">
                        <p className="m-0">
                            {attendance.map((element, index) => {
                                return (<p >{element}</p>)
                            })}

                        </p>
                    </Card></>
                    :
                    definitions ?
                        <Card kea={index} title={props.title} className="cardA" id="card">
                            <p className="m-0">
                                {definitions.map((element, index) => {
                                    return (<p >{element}</p>)
                                })}

                            </p>
                        </Card> 
                    :
                        dataS && dataP ?
                            <Card kea={index} title={props.title} className="md:w-25rem" id="card">
                                <p className="m-0">
                                    {dataP.map((element, index) => {
                                        return (<p >{element}</p>)
                                    })}
                                    {dataS.map((element, index) => {
                                        return (<p >{element}</p>)
                                    })}
                                </p>
                            </Card>
                            : <></>
            }
        </div>)
    )
}
