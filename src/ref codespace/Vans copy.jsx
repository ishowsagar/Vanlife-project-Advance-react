import React from "react";

// we want api to send us data ad fetch data by request just one time page renders,
// so using useEffect hook and keeping the DeArr empty [],
//  to make sure it does not depend on aything and,
//  just run this block of code one time whenver site mounts/renders
export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  //   Mapped over data we get from api and returning all data from a variable,
  //  to actually return it in return section of function
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  // displayinf the logic here and unloading whats coming from it and,
  //  rendering other things with it to render page we want.
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
