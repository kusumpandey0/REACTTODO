import "./ToggleSwitch.css";
import {useState} from 'react';
import { BiAbacus } from "react-icons/bi";
export const ToggleSwitch=()=>
{
    const [isOn, setIsOn]=useState(true);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    return (
        <>
       
       <BiAbacus />

            <div className="toggle-switch" 
            style={{backgroundColor:isOn? "#4caf50" : "#f44336"}}
            onClick={handleToggleSwitch}>
                <div className={`switch ${isOn?"on":"off"}`}>
                  <span className="switch-state">{isOn ? "ON" : "OFF" }</span>
                </div>
            </div>
        </>
    )
}