"use client"

import { FunctionComponent } from "react";

import style from "./card.module.css"

interface Props {children?: React.ReactNode, title: string}

export const Card: FunctionComponent<Props> = ({children, title}) => {
    return (
        <div className={style.box}>
            <div className={style.title}>{title}</div>
            {children}
        </div>
    )
}