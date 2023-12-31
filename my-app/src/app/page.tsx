"use client";

import { useGetCinemasQuery, useGetMoviesByCinemaQuery } from "../../redux/services/movieApi";
import { FilmList } from "../../components/films/filmlist/FilmList";
import { InputFilter } from "../../components/filter/inputfilter/inputfilter";
import { SelectFilter } from "../../components/filter/selectfilter/SelectFilter";
import { PopupItem } from "../../components/filter/selectfilter/PopupItem";
import style from "./page.module.css";
import { useState } from "react";
import React from "react";

export default function Home() {
  const genreSet = new Set<string>();
  const cinemaDict: {[key: string]: string} = {};
  let cinemaArr: Array<Array<string>> = [];

  const [filmName, setFilmName] = useState('');
  const [curGenre, setCurGenre] = useState('');
  const [curCinema, setCurCinema] = useState('');

  const changeGenre = (genre: string) => {
    setCurGenre(genre);
  };

  const changeCinema = (cinema: string) => {
    setCurCinema(cinema);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setFilmName(event.currentTarget.value);
  };

  let { data, isLoading, error } = useGetMoviesByCinemaQuery(curCinema);
  let { data: cinemas, isLoading: isCinemaLoading, error: cinemaError } = useGetCinemasQuery('');

  if (isLoading && isCinemaLoading) {
    return <div>Загрузка...</div>;
  }

  if (cinemas) {
    for (const cinema of cinemas) {
      cinemaDict[cinema.name] = cinema.id;
    }
    cinemaArr = Object.entries(cinemaDict);
  }

  for (const film of data) {
    genreSet.add(film.genre);
  }

  if (filmName.trim()) {
    const prettyName = filmName.trim().toLowerCase();
    data = data.filter((film: { title: string }) =>
      film.title.toLowerCase().includes(prettyName)
    );
  }

  if (curGenre.trim()) {
    const prettyGenre = curGenre.trim().toLowerCase();
    data = data.filter((film: { genre: string }) =>
      film.genre.trim().toLowerCase() === prettyGenre
    );
  }

  const genreArr = Array.from(genreSet);
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>Фильтр поиска</div>
        <div className={style.filter_container}>
          <InputFilter inputHandler={handleInput} />
          <SelectFilter title="Жанр" onSubmit={changeGenre}>
            {genreArr.map(genre => (
              <PopupItem title={genre} key={genre} />
            ))}
          </SelectFilter>
          <SelectFilter title="Кинотеатр" onSubmit={changeCinema}>
            {cinemaArr.map(cinema => (
              <PopupItem title={cinema[0]} key={cinema[1]} value={cinema[1]} />
            ))}
          </SelectFilter>
        </div>
      </div>
      <FilmList films={data} />
    </>
  );
}
