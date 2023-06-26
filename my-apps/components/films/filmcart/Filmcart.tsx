"use client"

import { FunctionComponent, Key } from "react";

import style from "./cartstyle.module.css"
import { FilmInfo } from "../filminf/Filminfo";
import { ButtonGroup } from "../../buttons/plusminus";
import { Close } from "../../icons/close";
import { Modal } from "../../modal/modal";

import { useState } from "react";
import { createPortal } from "react-dom";

interface FilmItem  {id: string; genre: string; title: string; posterUrl: string; };
interface smth {
    id: string,
    openModal: () => void,
    onClose: () => void,
    root: Element | null,
}

export const FilmCart: FunctionComponent<{films : any}> = ({films}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const root = document.querySelector('#root');

    return (
        <>
        {films.map((film: FilmItem) => {
            return  (
                <div className={style.container} key={film.id}>
                    {isModalOpen && root && createPortal(<Modal onClose={closeModal} id={film.id}/>, root)}
                    <FilmInfo id={film.id} genre={film.genre} 
                    title={film.title} posterUrl={film.posterUrl} />
                    <div className={style.control_panel}>
                        <ButtonGroup id={film.id} onDelete={{openModal: () => setIsModalOpen(true)}}/>
                        <span className={style.reset} onClick={() => setIsModalOpen(true)}><Close height="20" width="20"/></span>
                    </div>
                </div>
            )
        })}
        </>
    )
}