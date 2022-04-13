import { Router } from "express";
import { Pool } from "pg/lib";
const router = Router();

export const createHomework = async (req, res) => {
  const { matiere, type, dateCreation, dateRendu, description, idAdmin } =
    req.body;

  let result = null;

  await Pool.query(
    "INSERT INTO homework (matiere, type, date_creation, date_rendu, description, id_admin VALUES ($1, $2, $3, $4, $5, $6);",
    [matiere, type, dateCreation, dateRendu, description, idAdmin]
  )
    .then((_response) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return res.json(result);
};

export const getAllHomework = async (req, res) => {
  let result = null;

  await pool
    .query(
      "SELECT matiere, type, date_creation, date_rendu, description FROM homework"
    )
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getHomeworkById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query(
      "SELECT matiere, type, date_creation, date_rendu, description FROM homework WHERE id = $1;",
      [id]
    )
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateHomework = async (req, res) => {
  const { id } = req.params;
  const { matiere, type, dateCreation, dateRendu, description } = req.body;

  let result = null;
  pool
    .query(
      "UPDATE homework SET matiere = $1, type = $2, date_creation = $3, date_rendu = $4, description = $5 WHERE id = $6;",
      [matiere, type, dateCreation, dateRendu, description, id]
    )
    .then((_res) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return res.json(result);
};

export const deleteHomework = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM homework WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.error(error));
  return res.json(result);
};
