import { useEffect, useState } from "react"
import SearchCima from "./SearchCima"
import ShowDate from "./ShowDate"

const DataMAin = () => {
    const [value, setValue] = useState(null)
    const [swetch, setSwetch] = useState(false)

    const handleSearch = (search) => {
      setValue(null)
      load(search)
    }
    useEffect(()=>{
      load()
    },[])


    const  load = async (search = 'Mexico') => {
        const request = `${process.env.REACT_APP_URL}${search}&appid=${process.env.REACT_APP_KEY}`

        await fetch(request)
        .then(response => {
            if (!response.ok) throw Error(response.status);
            return response.json();
        })
        .then(response => {
          setSwetch(false)
          setValue(response)
          console.log(response);
        })

        .catch(error => {
          setSwetch(true)
        })
          }


  return (
    <div> 
        <SearchCima onChangeValue={handleSearch}/>
        {!swetch?<ShowDate valData={value}/>:<div>Lo sentimos no encontramos su peticion</div>}
    </div>
  )
}

export default DataMAin