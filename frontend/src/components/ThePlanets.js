import Saturn from '../assets/Saturn.jpg'

export default function ThePlanets(props){
    

    return(
        <section className="planets">

            {props.planets.map(planet => (
                
                    <div className="planet">
                        <h2>{planet.englishName}</h2>
                        <img className="planet-image" src={Saturn} alt={planet.englishName}/>
                        <section className="planet-info">
                            <p><b>Avg Home Price:</b> ${planet.avg_home_price}</p>
                            <p><b>Radius:</b> {planet.radius}</p>
                            <p><b>Gravity:</b> {planet.gravity}</p>
                            <p><b>Distance From Earth:</b> {planet.distance_from_earch} m km</p>
                            <p><b>Has Water?</b> {planet.has_water.toString()}</p>

                        </section>
                    </div>

                
            ))}

        </section>
    )
    
}