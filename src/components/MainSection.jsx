import data from '../data.js'
import Card from './Card.jsx'
import {useState} from 'React'

export default function Main() {
    const [weakness, setWeakness] = useState("fire");

     function fireWeakness() {
        setWeakness("fire")
    }

    const mappedData = data.map((pokemon) => {
        return (
            <>
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
            </>
        )
    })

    return (
        <>
            {mappedData}
        </>
    )
}