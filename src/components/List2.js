import React from 'react';
import { useState } from 'react';
function Car(props) {
    return (
        <li>{props.brand}</li>
    )
}
function List2() {
    let data = ["Kia", "Hyundai", "Nissan"];
    const [cars, setCars] = useState(data);
    const [newCarInput, setNewcar] = useState("");

    function submitNewCar(e) {
        let newArray = cars.slice();
        newArray = newArray.concat(newCarInput);
        setCars(newArray);
        setNewcar("");
    }

    function newCarDetect(e) {
        setNewcar(e.target.value);
    }

    function clearCars() {
        setCars([]);
    }

    return (
        <>
        <ul>
            {cars.map((car) => <Car brand={car}/>)}
        </ul>
        <label for="input">Enter a car brand: </label>
        <input type="text" placeholder="Volkswagen" id="input" value={newCarInput} onChange={newCarDetect}/>
        <button type="button" onClick={submitNewCar}>Submit</button>
        <button type="button" onClick={clearCars}>Clear</button>
        </>
    )
}
export default List2