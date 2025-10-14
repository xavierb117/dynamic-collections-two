import data from '../data.js'
import Card from './Card.jsx'
import {useState} from 'react'

export default function Main() {
    const [weakness, setWeakness] = useState("Fire");

     function waterWeakness() {
        setWeakness("Water")
    }
    function fireWeakness(){
        setWeakness("Fire")
    }

    function flipWeakness(){
        if(weakness=="Water"){
            fireWeakness();
        }else{
            waterWeakness();
        }
    }

    const mappedData = data.map((pokemon) => {
        return (
            <>
               <div id = "row">
                    <Card 
                        key = {pokemon.id}
                        name = {pokemon.name}
                        weakness = {weakness}
                        type = {pokemon.type}
                        hp = {pokemon.hp}
                        attack = {pokemon.attack}
                        defense = {pokemon.defense}
                        image = {pokemon.image}
                        abilities = {pokemon.abilities}
                    />
                </div>
            </>
        )
    })

    return (
        <>
            <button onClick={flipWeakness}>{weakness}</button>
            {mappedData}
        </>
    )
}