"use client";

import { FilmDetail } from "../../../../components/films/filmdet/filmdetail";

export default function FilmPage({params} : { params : { id : string } }) {
  return (
    <div>
        <FilmDetail id={params.id} />
    </div>
  )
}