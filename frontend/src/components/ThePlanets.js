

export default function ThePlanets(props){
    console.log(props.planets)

    return(
        <section className="planets">

            {props.planets.map(planet => (
                <div className="planet">
                    <div>
                        <h2>{planet.englishName}</h2>
                        <section className="planet-info">
                            <p>{planet.avg_home_price}</p>
                            <p>{planet.radius}</p>
                            <p>{planet.gravity}</p>
                            <p>{planet.distance_from_earch}</p>
                            <p>{planet.has_water}</p>

                        </section>
                    </div>

                </div>
            ))}

        </section>
    )
    
}