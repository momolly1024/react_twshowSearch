import React, { useEffect, useContext } from 'react'
import ShowsContext from '../context/shows/showsContext'
import Loader from '../components/Loader'
const Singlepage = ({ match }) => {

  const { getSingleShow, singleShow, loading } = useContext(ShowsContext)
  useEffect(() => {
    getSingleShow(match.params.id)

    // eslint-disable-next-line
  }, [])

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };


  return (
    <>
      {loading ? <Loader/>
        : <div className="singleshow">
          <img alt={singleShow.name} src={singleShow.image ? singleShow.image.medium : 'https://i.imgur.com/fen1rLX.png'} />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.gernes && singleShow.gernes.map(genre => (
              <span key={genre} className="singleshow__genre">{genre}</span>
            ))}
            <p>
              <strong>Status:</strong>{singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{singleShow.rating ? singleShow.rating.average : "no rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>
              {singleShow.officalSite ?
                <a href={singleShow.officalSite} target="_blank" rel="noreferrer">
                  {singleShow.officalSite}</a>
                : "no Offical site"}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      }
    </>
  )
}

export default Singlepage
