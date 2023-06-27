import React, { FunctionComponent, FormEvent } from "react";

import style from "./inputstyle.module.css";

interface InputFilterProps {
  inputHandler: (event: FormEvent<HTMLInputElement>) => void;
}

export const InputFilter: FunctionComponent<InputFilterProps> = ({ inputHandler }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <label htmlFor="input" className={style.filtername}>
        Название
      </label>
      <input type="text" id="input" className={style.input} placeholder="Введите название" onChange={inputHandler} />
    </form>
  );
};
