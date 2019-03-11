import React from 'react';
import MovieDetails from '../../components/MovieDetails';
import Menu from '../../components/Menu';
import Movies from '../../components/Movies';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const MovieDetailsPage = () => (
  <div>
    <Header />
    <MovieDetails />
    <Menu />
    <Movies />
    <Footer />
  </div>);

export default MovieDetailsPage;
