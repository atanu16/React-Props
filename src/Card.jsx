import react from "react";
import "./styles.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className="cirlce-img"
            width="100"
            height="100"
            src={props.imgURL}
            alt="avtar_img"
          />
        </div>

        <div className="bottom">
          <h1>.</h1>
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
