"use client"

import { FunctionComponent } from "react";

import style from "./stylefooter.module.css"
import Link from "next/link";

export const Footer: FunctionComponent = () => {
    return (
        <div className={style.footer} >
            <div>
            <Link href="/qwan" className={style.titel}>Вопросы-ответы</Link>
            </div>
            <div>
            <Link href="/aboutus" className={style.titel}>О нас</Link>
            </div>
        </div>
    )
}