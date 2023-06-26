"use client"

import { FunctionComponent } from "react";

import style from "./card.module.css"

interface Props {children?: React.ReactNode}

export const CardPart: FunctionComponent<Props> = ({children}) => {
    return (
        <div>
            {Boolean(children) && <div className={style.text}>{children}</div>}
        </div>
    )
}