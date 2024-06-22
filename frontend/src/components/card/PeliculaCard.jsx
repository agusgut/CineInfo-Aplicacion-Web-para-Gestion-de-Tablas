import React from "react";
import moment from "moment";

const PeliculaCard = ({
  Titulo,
  Calificacion,
  Generos,
  FechaEstreno,
  Duracion,
  Imagen,
}) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src={Imagen}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="300"
          alt={Titulo}
        />
        <div className="card-body d-flex justify-content-around align-items-center">
          <div>
            <h5 className="card-title">{Titulo}</h5>
            <div className="d-flex gap-1 flex-wrap my-1">
              {Generos &&
                Generos.map((genero) => (
                  <span
                    key={genero}
                    className="badge bg-danger-subtle border border-danger-subtle text-danger-emphasis rounded-pill"
                  >
                    {genero}
                  </span>
                ))}
            </div>
            <div className="d-flex gap-2 card-text">
              {FechaEstreno && (
                <span>
                  <b className="text-warning">Año: </b>
                  {moment(FechaEstreno).format("YYYY")}
                </span>
              )}
              <div className="vr"></div>
              {Duracion && (
                <span>
                  <b className="text-warning">Duración:</b> {Duracion} min
                </span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {Calificacion && (
              <span className="text-warning">
                <i className="fa-solid fa-star"></i> {Calificacion}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeliculaCard;
