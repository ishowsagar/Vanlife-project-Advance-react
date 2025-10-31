import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// params is just paramters short form
export default function VanDetail() {
  const [van, setVans] = useState(null);
  const params = useParams();

  // it will load that van object from api server which would have this id
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      // we have to get inside van coz api gives us data with van and inside have our data
      .then((data) => setVans(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
