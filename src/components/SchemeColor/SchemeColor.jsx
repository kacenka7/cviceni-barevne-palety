import React from 'react';
import '../../style.css';

export const SchemeColor = ({color, index}) =>{
    return(
        <div className="scheme-color" key={index} style={{ backgroundColor: color }} >{color}</div>
    )
}