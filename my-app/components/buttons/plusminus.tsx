"use client"

import { FunctionComponent, ReactPortal, useCallback, useState } from "react";
import { selectMovieCount } from "../../redux/tickets/selector";

import style from "./buttonsstyle.module.css"

import { Minus } from "../icons/minus";
import { Plus } from "../icons/plus";

import { ticketsActions } from "../../redux/tickets";

import { useDispatch, useSelector } from "react-redux";

interface modalProp {
    openModal: () => void,
}

export const ButtonGroup: FunctionComponent<{id: string, onDelete?: modalProp}> = ({id, onDelete}) => {

    const dispatch = useDispatch();

    const count = useSelector((state) => selectMovieCount(state, id));

    const minusState = count > 0 ? 'active' : 'disabled';
    const plusState = count < 30 ? 'active' : 'disabled';

    let modalOpen = false;
    

    if (onDelete && count === 1){
        modalOpen = true;
    }

    return (
        <div className={style.container}>
            <div className={`${style.button} ${style[minusState]}`} onClick={modalOpen ? () => onDelete?.openModal(): () => dispatch(ticketsActions.decrement(id))}><Minus /></div>
            <div>{count}</div>
            <div className={`${style.button} ${style[plusState]}`} onClick={() => dispatch(ticketsActions.increment(id))}><Plus /></div>
        </div>
    )
}