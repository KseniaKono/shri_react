"use client"

import style from "./buttonsstyle.module.css"
import { Minus } from "../icons/minus";
import { Plus } from "../icons/plus";

import { ticketsActions } from "../../redux/tickets";
import { FunctionComponent} from "react";
import { selectMovieCount } from "../../redux/tickets/selector";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from 'react';

interface ModalProp {
  openModal: () => void;
}

export const ButtonGroup: FunctionComponent<{ id: string; onDelete?: ModalProp }> = ({
  id,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectMovieCount(state, id));
  const minusState = count > 0 ? 'active' : 'disabled';
  const plusState = count < 30 ? 'active' : 'disabled';
  const [modalOpen, setModalOpen] = useState(false);

  const handleDecrement = () => {
    if (modalOpen) {
      onDelete?.openModal();
    } else {
      dispatch(ticketsActions.decrement(id));
    }
  };

  const handleIncrement = () => {
    dispatch(ticketsActions.increment(id));
  };

 useEffect (() => {
    if (onDelete && count === 1) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [onDelete, count]);

  return (
    <div className={style.box}>
      <div
        className={`${style.button} ${style[minusState]}`}
        onClick={handleDecrement}
      >
        <Minus />
      </div>
      <div>{count}</div>
      <div
        className={`${style.button} ${style[plusState]}`}
        onClick={handleIncrement}
      >
        <Plus />
      </div>
    </div>
  );
};
