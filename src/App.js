import { useState, useEffect } from 'react';
import Condamnations from './components/Condamnations';
import Pagination from './components/Pagination';

const App = () => {
  const [condamnations, setCondamnations] = useState([]) // We want the result in an array
  const [loading, setLoading] = useState(false) // Default loading is false
  const [currentPage, setCurrentPage] = useState(1) // Default current page is 1
  const [condamnationsPerPage, setCondamnationsPerPage] = useState(10) // Default condamnations per page is 10


  useEffect(() => {
    const getCondamnations = async () => {
      setLoading(true);
      const condamnationsFromServer = await fetchCondamnations();
      setCondamnations(condamnationsFromServer);
      setLoading(false);
    }

    getCondamnations();
  }, [])

  // Fetch Condamnations
  const fetchCondamnations = async () => {
    const res = await fetch('https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?limit=10000&resource_id=40105615-3abf-414b-bcba-182e8f2c5eb2&sort=Date_jugement desc');
    const data = await res.json();

    return data.result.records;
  }

  // Get current condamnations
  const indexOfLastCondamnation = currentPage * condamnationsPerPage;
  const indexOfFirstCondamnation = indexOfLastCondamnation - condamnationsPerPage;
  const currentCondamnations = condamnations.slice(indexOfFirstCondamnation, indexOfLastCondamnation);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Condamnations condamnations={currentCondamnations} loading={loading} />
      <Pagination condamnationsPerPage={condamnationsPerPage} totalCondamnations={condamnations.length} paginate={paginate} />
    </div>
  );
}

export default App;
