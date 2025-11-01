import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

// params is just paramters short form
export default function VanDetail() {
  const [van, setVans] = useState(null);
  const params = useParams();
  const location = useLocation(); // grabs what is coming from passed history state from where it is defined to where it is accessed

  // it will load that van object from api server which would have this id
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      // we have to get inside van coz api gives us data with van and inside have our data
      .then((data) => setVans(data.vans));
  }, [params.id]);

  // condtionally returns something with optional chaining mehod* ( might need more info)

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

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
