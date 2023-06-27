"use client"

import { FunctionComponent, useState, useEffect } from "react";

import style from "./selectfilter.module.css"
import { Arrow } from "../../icons/arrow";
import React from "react";

interface Props {children?: React.ReactNode, title: string, onSubmit?: (value: string) => void}

export const SelectContext = React.createContext<{curTitle: string, handleTitle?: (text: string, trueText?: string) => void}>({curTitle: ''});

export const SelectFilter: FunctionComponent<Props> = ({children, title, onSubmit}) => {

    const [isActive, setActive] = useState(false);
    const [curTitle, setTitle] = useState('');

    const placeholderState = isActive ? 'activeplacehold' : 'disabledplacehold';

    const closePopup = () => setActive(false);

    useEffect(() => {
        document.addEventListener('click', closePopup);
        return () => {
          document.removeEventListener('click', closePopup);
        };
      }, [ isActive ]);

    let titletext;
    if (!curTitle){
        titletext = 'Выберите ' + title.toLowerCase();
    } else{
        titletext = curTitle;
    }

      let handleTitle: (text: string, trueText?: string) => void;
      if (onSubmit){
          handleTitle = (text: string, trueText?: string) => {
              if (trueText){
                  onSubmit(trueText);
              } else {
                  onSubmit(text);
              }
              setTitle(text);
          };
      } else {
          handleTitle = (text: string) => setTitle(text);
      }
      
    return (
        <form className={style.container}>
            <div className={style.filtername}>{title}</div>
            <div onClick={(event) => event.stopPropagation()}>
                <div className={`${style.placeholder} ${style[placeholderState]}`} onClick={() => setActive(!isActive)}>
                    <div>{titletext}</div>
                    <Arrow height="20" width="20" color="#999FA6" isRotate={isActive}/>
                </div>
                {isActive && children && <div className={style.popup}>
                    <SelectContext.Provider value={{curTitle, handleTitle: handleTitle}}>
                        <div onClick={closePopup}>
                            <div className={style.popuptext} onClick={() => handleTitle('')}>Не выбрано</div>
                            {children}
                        </div>
                    </SelectContext.Provider>
                </div>}
            </div>
        </form>
    )
}