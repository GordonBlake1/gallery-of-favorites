"use client";
import { useState, useEffect } from "react";
import { movies } from "@/util/movies";
import styles from "./GenerateMovies.module.css";

function GenerateMovies({ startYear, endYear }) {
  const [moviesByYearAndRating, setMoviesByYearAndRating] = useState({});

  useEffect(() => {
    setMoviesByYearAndRating(generateMoviesInRange(startYear, endYear));
  }, [startYear, endYear]);

  const generateMoviesInRange = (start, end) => {
    const filteredMovies = movies.filter(
      (movie) => movie.year >= start && movie.year <= end
    );

    const groupedMovies = filteredMovies.reduce((acc, movie) => {
      if (!acc[movie.year]) {
        acc[movie.year] = {};
      }
      if (!acc[movie.year][movie.rating]) {
        acc[movie.year][movie.rating] = [];
      }
      acc[movie.year][movie.rating].push(movie);
      return acc;
    }, {});

    // Sort movie titles within each year and rating group in descending order
    Object.values(groupedMovies).forEach((yearGroup) => {
      Object.keys(yearGroup)
        .sort((a, b) => b - a)
        .forEach((rating) => {
          yearGroup[rating].sort((a, b) => b.title.localeCompare(a.title));
        });
    });

    return groupedMovies;
  };

  return (
    <>
      {Object.entries(moviesByYearAndRating).map(([year, yearGroup]) => (
        <div key={year} className={styles.yearCard}>
          <p className={styles.movieYear}>{year}</p>
          {Object.entries(yearGroup)
            .sort(([ratingA], [ratingB]) => ratingB - ratingA)
            .map(([rating, ratingGroup]) => (
              <div key={rating}>
                {ratingGroup.map((movie) => (
                  <p
                    key={movie.id}
                    className={styles.movieTitle}
                    style={{
                      color:
                        movie.rating === 5
                          ? "#4f4f4f"
                          : movie.rating === 6
                          ? "#cc33cc"
                          : movie.rating === 7
                          ? "#3366ff"
                          : movie.rating === 8
                          ? "#33cc00"
                          : movie.rating === 9
                          ? "#ff6600"
                          : movie.rating === 10
                          ? "#cc0000"
                          : "inherit",
                    }}
                  >
                    {movie.title} (<span className={styles.dirBy}>dir. by</span>{" "}
                    <span className={styles.movieDirector}>
                      {movie.director}
                    </span>
                    )
                  </p>
                ))}
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default GenerateMovies;
