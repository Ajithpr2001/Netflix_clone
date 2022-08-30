import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import {orginals,action,comedy,horror,romance} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';
function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPoster  url={orginals} title='Netflix originals'/>
    <RowPoster url={action} title='Action' isSmall/>
    <RowPoster url={comedy} title='Comedy movies' isSmall/>
    <RowPoster url={horror} title='Horror movies' isSmall/>
    <RowPoster url={romance} title='Romance movies' isSmall/>

    </div>
  );
}

export default App