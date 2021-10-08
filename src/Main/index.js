import React, {useState, useEffect} from "react";

const Main = () => {
    const names = ["Denys", "Petro", "Semen", "Dmytro"];
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("no-name");

    const changeName = () => {
        setName(names[counter]);
        setCounter((counter < names.length-1 ? (counter+1) : 0));
    }

    useEffect(() => {
        if(name == "Denys") {
            alert('Hello, Denys!');
        }
    }, [name]);
    // [name, counter]); --     Якщо передати масив другим параметром то метод спрацьовуватиме на 
    //  початковому рендерингу сторінки і при зміні станів, котрі передані у масиві. Якщо масив пустий, то метод
    //  спрацьовуватиме тільки при початковому рендерингу сторінки

    return (<div className="container mt-4">
        <p><em>{name}</em></p>
        <button className="btn btn-info" onClick={changeName}>Змінити ім'я</button>
    </div>);
};

export default Main;