import 'babel-polyfill';
import React from 'react';
import MovieCard from './MovieCard';
import styles from './movies.scss';

const movies = new Array(17);
movies.fill({
  name: 'VERY LONG MOVIE NAME TO TEST OVERFLOW',
  id: 1,
  description: 'He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon—for the intimate revelations of young men or at least the terms in which they express them are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat a sense of the fundamental decencies is parcelled out unequally at birth.',
  imageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  rating: 4.8,
  genres: ['Fantasy', 'Adventure', 'Action', 'Drama', 'Comedy'],
}, 0, 16);

const Movies = () => (
  <div className={styles.item}>
    {movies.map((movie, i) => (
      <MovieCard movie={movie} key={i} />
    ))}
  </div>);

export default Movies;
