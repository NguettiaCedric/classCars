import React from "react";

const Welcome = () => {

   const bonjour = () => {
        console.log('Bonjour');
    }

    // Je vehicule la chaine de caractère('Bonsoir) à arg 
    const bonsoir = (arg) => {
        console.log(arg);
    }




    return (
        <div style={{paddingTop:9}}>

            <button onClick={bonjour} >Invoquer une fonction</button>

            <button onClick={() => bonsoir("Bonsoir")}>Invoauer une fonction avec arg "Bonsoir"</button>

            <button onClick={() => console.log("Bonne nuit")}>clg sur le button </button>
        </div>
    )

}

export default Welcome;