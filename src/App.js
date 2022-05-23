import { useState, useEffect } from 'react'
import Condamnations from './components/Condamnations'

const App = () => {
  const [condamnations, setCondamnations] = useState([])

  useEffect(() => {
    const getCondamnations = async () => {
      const condamnationsFromServer = await fetchCondamnations()
      setCondamnations(condamnationsFromServer)
    }

    getCondamnations()
  }, [])

  // Fetch Condamnations
  const fetchCondamnations = async () => {
    const res = await fetch('https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?limit=10000&resource_id=40105615-3abf-414b-bcba-182e8f2c5eb2&sort=Date_jugement desc')
    const data = await res.json()

    return data.result.records
  }

  return (
    <div className="App">
      <header className="App-header">
        <Condamnations condamnations={condamnations} />
      </header>
    </div>
  );
}

export default App;
