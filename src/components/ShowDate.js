const ShowDate = ({valData}) => {
    
  return (
    <div>
        <div className="data-title">
        <p>{valData?.name}</p>
        </div>

        <div className="cont-element">
        <div className="data-value">
        <p>Humedad: <span>{valData?.main.humidity}</span></p>
        <p>Presión: <span>{valData?.main.pressure}</span></p>
        <p>Temperatura: <span>{(valData?.main.temp -273.15).toString().slice(0,2)}°</span></p>
        </div>
        <div className="data-value">
        <img src={`http://openweathermap.org/img/wn/${valData?.weather[0].icon}@2x.png`} alt={valData?.name}/>
        </div>
        </div>
        <div>
        <iframe title="map" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${valData?.coord.lon}5!3d${valData?.coord.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default ShowDate