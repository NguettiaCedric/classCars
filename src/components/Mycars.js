import React , { Component} from "react";
import Car from './Cars';

class Mycars extends Component {

    state = {
        // cars : ["Ford", "Mercedes", "Peugeot"],
        voitures : [ 
            {name : 'Ford', color: 'red', year:' 2022'},
            {name : 'Mercedes', color: 'black', year:' 2018'},
            {name : 'Peugeot', color: 'green', year:' 2021'}
        ],

        titre : "Catalogue voitures ",
    }

    addTenYears = () => {
        // console.log('active');
        const updateState = this.state.voitures.map((param) => {
            // return param.year = param.year - 10;
            return param.year -= 10;
        })

        this.setState({
            updateState
        })
    }

    getAge = (year) => {

        const now = new Date().getFullYear();
        const age = now - year;

        let frenchYearStr= "";
        
        if (age == 0) {
            
            frenchYearStr = "";

        } else if (age == 1) {

            frenchYearStr = "an";

        }else if (age > 1) {
            frenchYearStr = "ans";
        }


        return `${age} ${frenchYearStr} `;
    } 

    render(){
        // console.log(this);      
        const title = this.props.title;
        const color = this.props.color;
        const years = new Date().getFullYear();

        // const [Ford, Mercedes, Peugeot ] = this.state.voitures
        // console.log(Ford, Mercedes, Peugeot );

        return(

            <div>  
                <h1>{this.state.titre}</h1>
                
                <button onClick={this.addTenYears}> + 10 ans</button>

                
                {/* <Car 
                    name={Ford.name} 
                    color={Ford.color} 
                    year={year - Ford.year + ' ans'}
                />

                <Car 
                    name={Mercedes.name} 
                    color={Mercedes.color} 
                    year={year - Mercedes.year + ' ans'}
                />

                <Car
                    name={Peugeot.name} 
                    color={Peugeot.color} 
                    year={year - Peugeot.year + ' ans'}
                /> */}


                {/* Via map */}

                {/* <--------------------------------------------------------------------------------------------------------------------> */}


               { 
               
                
                // Extraction des proprietés dans l"objet voitures via le destructuring

                    this.state.voitures.map( ({name, color, year}, index) => {
                        
                        return( 
                            // console.log(year),
                            <div key={index} > 
                                <Car 
                                    name={name} 
                                    color={color}
                                    year={this.getAge(year)}
                                    // year={years - year + ' ans'}
                                />
                            </div>
                        )
                    })
                }
                
                {/* <--------------------------------------------------------------------------------------------------------------------> */}
               

                {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car> */}

                {/* <--------------------------------------------------------------------------------------------------------------------> */}

             
                {/* {
                    this.state.voitures.map((voiture, index) => {
                       return( 
                            <div key={index} > 
                                <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'}/>
                            </div>

                            // <div key={index} > 
                            //     <Car color={voiture.color} year={year - voiture.year + ' ans'}> {voiture.name} </Car>
                            // </div>

                            // <Car key={index} color={voiture.color} year={year - voiture.year + ' ans'}> {voiture.name} </Car>
                       )
                    })
                } */}


                {/* <--------------------------------------------------------------------------------------------------------------------> */}
                {/* {Math.random()} */}


            </div>  

            

        )     
    }
}

export default Mycars;