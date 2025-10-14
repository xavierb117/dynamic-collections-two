export default function Card({id, name, type, hp, attack, defense, image, abilities}) {
    const typeToList = type.map((t)=>{
        return(
            <>
                <li>{t}</li>
            </>
        )
    })
    function highAttack(attack){
        if(attack>60){
            return(<p>High Attack Damage!</p>)
        }
    }

    return (
        <>
            <h3>{name}</h3>
            <img src = {image} alt = {`Picture of ${name}`}></img>
            <h4>Type:</h4>
            <ul>
                {typeToList}
            </ul>
            <h4>Stats:</h4>
            <p>HP: {hp}</p>
            <p>Attack: {attack} {highAttack(attack)}</p>
            <p>Defense: {defense}</p>
            <h4>Abilities:</h4>
            <p>{abilities[0].name}: {abilities[0].description}</p>
            <p>{abilities[1].name}: {abilities[1].description}</p>
        </>
    )
}