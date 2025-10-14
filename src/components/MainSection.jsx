import data from '../data.js'
import Card from './Card.jsx'

export default function Main() {
    const mappedData = data.map((pokemon) => {
        return (
            <>
                <Card 
                    key = {pokemon.id}
                    name = {pokemon.name}
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