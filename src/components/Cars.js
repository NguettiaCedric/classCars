import React from "react";

const Car = ({color, children, year, name}) => {
    // console.log(props);
     const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;
 
     if (name) {
         return (
             <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>

                 <p>Marque: { name }</p>
                 <p>Année: {year} </p>
                 {colorInfo}

             </div>
         )
     }
 
     return null 
        // <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
        //         Pas de Data
        // </div>
     
     // ce return est Facultatif
 }

export default Car;