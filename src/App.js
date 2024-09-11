import { useState, useEffect } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import { ThreeCircles } from 'react-loader-spinner'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div className="big-container">
      <Header /> 
        { !loading ?
        <div className="container">
          <Map eventData={eventData} />
        </div>
        : <div className="loader">
          <ThreeCircles
            height="80"
            width="80"
            radius="9"
            color="firebrick"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
        }
    </div>
  );
}

export default App;