"use client";

import React, { useState } from "react";
import './page.module.css';
// import style from './page.module.css'
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { CardWeek } from "@/components/Card";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [createWoman, setCreateWoman] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const [sorted, setSorted] = useState(false);
  // let [arraysDivididos, SetArraysDivididos] = useState([]);
  const [womanGroup, setWomanGroup] = useState([]);

  function shuffleArray() {
    setSorted(true);
    for (let i = womanGroup.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [womanGroup[i], womanGroup[j]] = [womanGroup[j], womanGroup[i]];
    }
    let arraysDivididos = divideArray(womanGroup);
    setThursday(arraysDivididos[0]);
    setFriday(arraysDivididos[1]);
    setSaturday(arraysDivididos[2]);
    setSunday(arraysDivididos[3]);

    console.log(arraysDivididos);
  }

  function divideArray(array) {
    const chunkSize = Math.ceil(array.length / 4);
    const dividedArrays = [];

    for (let i = 0; i < 4; i++) {
      const startIndex = i * chunkSize;
      const endIndex = startIndex + chunkSize;
      dividedArrays.push(array.slice(startIndex, endIndex));
    }

    return dividedArrays;
  }

  const onSubmit = (data) => {
    console.log(data);
    womanGroup.push(data);
    // console.log(womanGroup);
    // shuffleArray(womanGroup)
    // divideArray(womanGroup)
  };

  // const arraysDivididos = divideArray(womanGroup);

  // console.log(arraysDivididos);

  return (
    <main className="main">
      {/* <p>Cheguei</p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("woman", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>Campo vázio</span>}

        <input type="submit" />
      </form>

      <CardWeek title={"Todas as pessoas"} array={womanGroup} />

      <Button onClick={() => shuffleArray()} variant="contained">
        Sorted
      </Button>
      {!sorted ? (
        <div>
          <p>Sem dados</p>
        </div>
      ) : (
        <div>
          <CardWeek title={"Quinta-feira"} array={thursday} />
          <CardWeek title={"Sexta-feira"} array={friday} />
          <CardWeek title={"Sábado"} array={saturday} />
          <CardWeek title={"Domingo"} array={sunday} />
        </div>
      )}
    </main>
  );
}
