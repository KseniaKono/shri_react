"use client"

import { FunctionComponent, Key } from "react";

import style from "./cartstyle.module.css"
import { FilmInfo } from "../filminf/Filminfo";
import { ButtonGroup } from "../../buttons/plusminus";
import { Close } from "../../icons/close";

import { ticketsActions } from "../../../redux/tickets";

import { useDispatch } from "react-redux";

interface FilmItem  {id: string; genre: string; title: string; posterUrl: string; }

export const FilmCart1: FunctionComponent<{films : any}> = ({films}) => {

    const dispatch = useDispatch();

    return (
        <>
        {films.map((film: FilmItem) => {
            return  (
                <div className={style.container} key={film.id}>
                    <FilmInfo id={film.id} genre={film.genre} 
                    title={film.title} posterUrl={film.posterUrl} />
                    <div className={style.control_panel}>
                        <ButtonGroup id={film.id}/>
                    </div>

                </div>
            )
        })}
        </>
    )
}