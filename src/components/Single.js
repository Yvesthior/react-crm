import React from "react";

export default function Single(props) {
  return (
    <li className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src="./portrait.jpg" alt={props.item.title} />
          <span className="card-title">
            {props.item.prenom} {props.item.nom} - {props.item.compagnie}{" "}
          </span>
        </div>
        <div className="card-content">
          <span className="card-title"> {props.item.email} </span>
          <div className="row">
            <div className="col l6 center">
              <blockquote>
                {" "}
                <h5> {props.item.notes}</h5>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button
            className="btn waves-effects waves-light red darken-4"
            onClick={props.deleteData.bind(this, props.item.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </li>
  );
}
