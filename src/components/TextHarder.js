import React from 'react';
import { useState } from 'react';
function TextHarder() {
    const [count, setCount] = useState(0);
    const [car, setCar] = useState({
        brand: "Honda",
        model: "Civic",
        year: "2018",
        colour: "black"
    });

    // function renderCar(car) {
    //     return {
    //         <>
    //         <button>
    //         </button>
    //     }
    // }

    // function updateColour(){
    //     setCar(previousState => {
    //         return {...previousState, colour: "red"}
    //     }
    // )};

    // function updateColour(){
    //     switch(car.brand) {
    //         case ("Honda"):
    //             setCar({
    //                 brand: "Ford",
    //                 model: "Mustang",
    //                 year: "1960",
    //                 colour: "green"
    //             })
    //             break;
    //         default:
    //             setCar({
    //                 brand: "Honda",
    //                 model: "Civic",
    //                 year: "2018",
    //                 colour: "black"
    //             })
    //             break;
    //     }
    // }

    function updateCar() {
        switch (count) {
            case (0):
                setCar({
                    brand: "Ford",
                    model: "Mustang",
                    year: "1960",
                    colour: "purple"
                });
                setCount(count + 1);
                break;
            case (1):
                setCar({
                    brand: "Toyota",
                    model: "Corolla",
                    year: "2019",
                    colour: "black"
                });
                setCount(count + 1);
                break;
            case (2):
                setCar({
                    brand: "Citroen",
                    model: "C3",
                    year: "2003",
                    colour: "green"
                });
                setCount(count + 1);
                break;
            default:
                setCar({
                    brand: "Honda",
                    model: "Civic",
                    year: "2018",
                    colour: "black"
                });
                setCount(0);
                break;
        }
    }

    return (
        <>
            <h1>My car is a {car.brand} {car.model}</h1>
            <p>
                The year it was made is {car.year}.
                The colour is {car.colour}.
            </p>
            <button onClick={updateCar}>
                Change
            </button>
        </>
    )
}
export default TextHarder