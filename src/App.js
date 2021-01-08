import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';



function App() {


  return (
    <div className="app">
      <Nav />

      <Banner />


      <Row
        title="DERZEIT BELIEBT"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="FLEX-TV Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action-Filme" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy-Filme" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror-Filme" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantische Filme" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Dokumentarfilme" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
