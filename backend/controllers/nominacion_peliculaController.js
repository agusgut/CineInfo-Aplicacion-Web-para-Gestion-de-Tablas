import NominacionPelicula from "../models/nominaciones_pelicula.js";
import * as nominacion_peliculaService from "../services/nominacion_peliculaService.js";
import { NotFoundError, BadRequestError } from "../utils/errors.js";
import { logger } from "../utils/logger.js";

// Buscar todas las nominaciones de peliculas
export const getNominacionesPelicula = async (req, res, next) => {
  try {
    const nominaciones = await nominacion_peliculaService.getNominacionesPelicula();
    logger.info(
      `GET /nominaciones_pelicula | ${req.headers["user-agent"]} | ${nominaciones.length} registros encontrados`
    );
    res.json(nominaciones);
  } catch (error) {
    logger.error(
      `GET /nominaciones_pelicula | ${req.headers["user-agent"]} | ${error.message}`
    )
    next(error);
  }
};

// Crear una nueva nominacion de pelicula
export const createNominacionPelicula = async (req, res, next) => {
  try {
    const nominacion = req.body;
    const nuevaNominacion = await nominacion_peliculaService.createNominacionPelicula(nominacion);
    res.status(201).json(nuevaNominacion);
  } catch (error) {
    next(error);
  }
};

// Buscar una nominacion de pelicula por sus id's
export const getNominacionPeliculaById = async (req, res, next) => {
  try {
    const { id_academia, id_premio, id_pelicula } = req.params;
    const nominacion = await nominacion_peliculaService.getNominacionPeliculaById(id_academia, id_premio, id_pelicula);
    if (nominacion) {
      res.json(nominacion);
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};

// Buscar una nominacion de pelicula por su id_academia
export const getNominacionPeliculaByAcademia = async (req, res, next) => {
  try {
    const { id_academia } = req.params;
    const nominacion = await nominacion_peliculaService.getNominacionPeliculaByAcademia(id_academia);
    if (nominacion) {
      res.json(nominacion);
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};

// Buscar una nominacion de pelicula por su id_premio
export const getNominacionPeliculaByPremio = async (req, res, next) => {
  try {
    const { id_premio } = req.params;
    const nominacion = await nominacion_peliculaService.getNominacionPeliculaByPremio(id_premio);
    if (nominacion) {
      res.json(nominacion);
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};

// Buscar una nominacion de pelicula por su id_pelicula
export const getNominacionPeliculaByPelicula = async (req, res, next) => {
  try {
    const { id_pelicula } = req.params;
    const nominacion = await nominacion_peliculaService.getNominacionPeliculaByPelicula(id_pelicula);
    if (nominacion) {
      res.json(nominacion);
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};


// Actualizar una nominacion de pelicula
export const updateNominacion = async (req, res, next) => {
  try {
    const { id_academia, id_premio, id_pelicula } = req.params;
    const nominacion = req.body;
    const updatedNominacion = await nominacion_peliculaService.update(
      id_academia,
      id_premio,
      id_pelicula,
      nominacion
    );
    if (updatedNominacion) {
      res.json(updatedNominacion);
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar una nominacion de pelicula
export const deleteNominacionPelicula = async (req, res, next) => {
  try {
    const { id_academia, id_premio, id_pelicula } =
      req.params;
    const result = await nominacion_peliculaService.deleteNominacion(
      id_academia,
      id_premio,
      id_pelicula
    );
    if (result) {
      res.status(204).end();
    } else {
      throw new NotFoundError("Nominacion de pelicula no encontrada");
    }
  } catch (error) {
    next(error);
  }
};
