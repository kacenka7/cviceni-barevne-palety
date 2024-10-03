import React from 'react';
import './Palette.css';
import { SchemeColor } from '../SchemeColor/SchemeColor';

export const Palette = ({paletteData}) => {
    return(
        paletteData.map ((palette) => (
            <div className="palette" key={palette.name}>
              <div className={`palette-scheme palette-scheme--${palette.direction}`}>
                <img className="scheme-image" src={palette.image} alt={palette.attribution.name}/>
                <div className="scheme-colors">
                  {palette.colors.map((color, index)=>(
                    <SchemeColor color={color} index={index}/>
                   ))}
                </div>
              </div>
              <div className="palette-info">
                <h2>{palette.name}</h2>
                <p> {palette.description}</p>
                <p>Photo by <a href={palette.attribution.url} target="_blank">{palette.attribution.name}</a>.</p>
              </div>
              
            </div>
           ))
    )
}