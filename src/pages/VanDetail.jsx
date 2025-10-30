import { useEffect } from "react";
import { useParams } from "react-router-dom";

// params is just paramters short form 
export default function VanDetail() {
  const params =useParams()

  React.useEffect( () => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
  } ,[params.id])
  return <h1>Van details comp is rendered!</h1>;
}
