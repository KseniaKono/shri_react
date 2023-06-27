"use client"

import { FunctionComponent } from "react";

import style from "./styleheader.module.css"
import { Korzina } from "../icons/korzina";
import Link from "next/link";
import { useSelector } from "react-redux"
import { selectTotal } from "../../redux/tickets/selector"

export const Header: FunctionComponent = () => {
    const total = useSelector((state) => selectTotal(state));
    return (
        <header className={style.header} >
        <div>
        <Link href="/" className={style.biletopoisk}>Билетопоиск</Link>
        </div>
        <div className={style.icon}>
        <Link href="/cart" className={style.icon_contain}>
           <div className={style.counter}>{total}</div>
           <Korzina height="32" width="32" color="white"/>
        </Link>
        </div>
    </header>
    )
}