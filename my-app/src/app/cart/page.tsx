"use client";

import { useSelector } from "react-redux"

import { selectTotal, selectCart } from "../../../redux/tickets/selector"
import { useGetMoviesQuery } from "../../../redux/services/movieApi"
import { FilmCart } from "../../../components/films/filmcart/Filmcart";
import { TicketsSum } from "../../../components/sum/sum";
import style from './page.style.module.css'

export default function Cart() {

    const cart = useSelector((state) => selectCart(state));
    const total = useSelector((state) => selectTotal(state));
    const {data, isLoading, error} = useGetMoviesQuery('');

    if (isLoading){
        return <div>Loading...</div>
    }

    const moviesInCart = data.filter((film: { id: string; }) => film.id in cart);
    return (
        <>
            <FilmCart films={moviesInCart}/>
            <div className={style.void} />
            <TicketsSum sum={total} />
        </>
    )
}