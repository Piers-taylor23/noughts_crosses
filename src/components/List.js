import React from 'react';
import { useState } from 'react';
// Car component (acts like a child in the DOM)
function Car(props) {
    return(
        <li>{props.brand}</li>
    )
}
// List component (acts like a parent in the DOM)
function List() {

    let data = ["Ford", "Honda", "Citroen"];
    const[cars, setCars] = useState(data); // [variable, method] = useState(initialstate)
    const[newBrand, setNewbrand] = useState("");

    // declare a new variable, let it be a copy of the existing array
    // redeclare it with the added new value
    // call the method that sets the array to the new array
    // clear the input box
    function newCar(e) {
        let cars2 = cars.slice();
        cars2 = cars2.concat(newBrand);
        setCars(cars2);
        setNewbrand("");
    }

    // call the setNewBrand method along with the existing variable (empty) and the event handler data (exact naming convention find in scope)
    function onNewBrandChange(e) {
        setNewbrand(newBrand + e.nativeEvent.data);
    }

    return (
        <>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
            <label for="newCar">Add a new car: </label>
            <input type="text" id="newCar" placeholder="Volkswagen" value={newBrand} onChange={onNewBrandChange}/>
            <button 
            type="button"
            onClick={newCar}>
                Submit
            </button>
        </>
    )
}
export default List