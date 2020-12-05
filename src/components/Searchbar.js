import { useState, useContext } from 'react'
import Alert from '../components/Alert'
//context
import ShowsContext from '../context/shows/showsContext'
//7
import AlertsContext from '../context/alerts/alertsContext'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const showsContext = useContext(ShowsContext)
  const { searchShows } = showsContext

  // 8
  const { alert, setAlert } = useContext(AlertsContext)
  //8

  const onSearchHandler = (e) => {
    e.preventDefault()
    //9
    if (searchTerm === "") {
      setAlert("Please enter something", "danger")
    } else {
      searchShows(searchTerm)
    }
  }

  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} />
        : null
      }
      <form className="searchbar__form">
        <input type="text"
          placeholder="search for Tv show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>search</button>
      </form>
    </div>
  )
}

export default Searchbar
