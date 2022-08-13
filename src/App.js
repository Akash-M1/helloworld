import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Filter from './components/Filter.js';
import Catalog from './components/Catalog.js'; 
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filter />
      <Catalog />
      <Pagination />
    </div>
  );
}

export default App;
