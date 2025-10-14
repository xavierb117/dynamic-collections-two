export default function cards([id, name, type, hp, attack, defense, image, abilities]) {
    function typeToList(type) {
        type.map((element) => {
            return (<li key = {id}>{element}</li>)
        })
    }

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {typeToList(type)}
            </ul>
            <p>{hp}</p>
            <p>{attack}</p>
            <p>{defense}</p>
            <img src = {image} alt = {`Picture of ${name}`}></img>
            <p>{abilities[0].name} {abilities[0].description}</p>
            <p>{abilities[1].name} {abilities[1].description}</p>
        </>
    )
}