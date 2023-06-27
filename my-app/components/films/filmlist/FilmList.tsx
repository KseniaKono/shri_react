import style from "./liststyle.module.css";
import { FilmInfo } from "../filminf/Filminfo";
import { ButtonGroup } from "../../buttons/plusminus";
import React from "react";

interface FilmItem {
  id: string;
  genre: string;
  title: string;
  posterUrl: string;
}

interface FilmListProps {
  films: FilmItem[];
}

export const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <div className={style.wrapper}>
      {films.map((film) => (
        <div className={style.container} key={film.id}>
          <FilmInfo
            id={film.id}
            genre={film.genre}
            title={film.title}
            posterUrl={film.posterUrl}
          />
          <div className={style.control_panel}>
            <ButtonGroup id={film.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
