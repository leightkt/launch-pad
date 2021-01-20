import PlanetPic from '../assets/Earth.jpg'

export default function ThePlanets(props){
    console.log(props.planets)

    return(
        <section className="planets">

            {props.planets.map(planet => (
                
                    <div className="planet">
                        <h2>{planet.englishName}</h2>
                        <img src={planet.image} alt={planet.englishName}/>
                        <section className="planet-info">
                            <p>avg home price: ${planet.avg_home_price}</p>
                            <p>radius: {planet.radius}</p>
                            <p>gravity: {planet.gravity}</p>
                            <p>distance from earth: {planet.distance_from_earch}</p>
                            <p>has water? {planet.has_water.toString()}</p>

                        </section>
                    </div>

                
            ))}

        </section>
    )
    
}