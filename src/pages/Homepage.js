import React, { useContext } from 'react'
import Searchbar from '../components/Searchbar'
import ShowsContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem'
import Loader from '../components/Loader'
const Homepage = () => {
  const showsContext = useContext(ShowsContext)
  const { loading, shows } = showsContext
  return (
    <div className="homepage">
      <Searchbar />
      {loading ? <Loader/> :
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={item.show.image ? item.show.image.medium : 'https://i.imgur.com/fen1rLX.png'}
              name={item.show.name}
              rating={item.show.rating.average ?
                item.show.rating.average : 'no rating'
              }
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Homepage
