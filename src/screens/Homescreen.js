import React from "react";
import "./Homescreen.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import requests from "../requests";
import Row from "../components/Row";

const Homescreen = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* BANNER */}
      <Banner />

      {/* ROWS */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Homescreen;
