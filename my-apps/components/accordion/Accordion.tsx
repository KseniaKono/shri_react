"use client"

import { FunctionComponent, useCallback, useState } from "react";

import style from "./accordion.module.css"
import { Arrow } from "../icons/arrow";

interface Props {children?: React.ReactNode, title: string}

export const Accordion: FunctionComponent<Props> = ({children, title}) => {

    let [isActive, setActive] = useState(false);

    const switchAc = useCallback((() => {setActive((isActive) => !isActive)}), []);

    return (
        <div className={style.box} onClick={switchAc}>
            <div className={style.inbox}>
                <div className={style.title}>{title}</div>
                <Arrow height="32" width="32" color="black" isRoate={isActive}/>
            </div>
            {isActive && <div className={style.text}>{children}</div>}
        </div>
    )
}