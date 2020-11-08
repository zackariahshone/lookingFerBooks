import Header from './components/header.js'
import Nav from './components/navBar'
import Search from './components/search.js';
import Results from './components/resultslist';
import './App.css';

function App() {
  return (
   <div>

    <Nav />
    <Header />
    <Search />
    <Results />
   </div>
  );
}

export default App;
