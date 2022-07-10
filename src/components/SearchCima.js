import { useState } from "react"

const SearchCima = ({onChangeValue}) => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        const valInput = e.target.value
        setSearch(valInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search !== ''){
        onChangeValue(search)}
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p className="clima-title">Clima City </p>
            <input type="text" value={search} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default SearchCima