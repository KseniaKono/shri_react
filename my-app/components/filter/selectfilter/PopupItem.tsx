"use client"

import { FunctionComponent, useContext } from "react";

import style from "./selectfilter.module.css"
import { SelectContext } from "./SelectFilter";

interface Props {title: string, value?: string}

export const PopupItem: FunctionComponent<Props> = ({title, value}) => {

    const {handleTitle: titleHandler} = useContext(SelectContext);
    if (!titleHandler) {return null}
    return (
        <div className={style.popuptext} onClick={() => titleHandler(title, value)}>{title}</div>
    )
}