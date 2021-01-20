

export default function ThePlanets(props){

    return(
        <section className="planets">

            {props.planets.map(planet => (
                <div className="planet">

                </div>
            ))}

        </section>
    )
    
}