import React, {useState} from "react";
import '../App.css';

export const Filter= () =>{
    const [filteredList, setFilteredList] = useState<string[]>([]);
    const list = [
        'Apple',	'Banana',	'Apricot	Atemoya',
        'Avocados',	'Blueberry',	'Blackcurrant',	'Ackee',
        'Cranberry',	'Cantaloupe',	'Cherry	Black sapote','Chocolate pudding fruit',
        'Dragonfruit	Dates',	'Cherimoya',	'Buddha’s hand fruit'
    ];

    const handleChange = (event:any) =>{
        const value = event.target.value;
        let filter = list.filter(fruit => {
            if (value === '')
                return fruit;
            if (fruit.toLowerCase().includes(value.toLowerCase()))
                return fruit;
        });

        setFilteredList(filter);

    }
    return (
        <div className={'App'}>
            <input type={'text'} onChange={handleChange}  />
                {filteredList.map((fruit, key) =>(
                    <div key={key}>
                        <p>{fruit}</p>
                    </div>
                ))}
        </div>
    )
}