import { pool } from "../config/database.config.js";
import sha256 from "crypto-js/sha256.js";

pool.connect;

//#region CRUD

export const createAdmin = async (req, res) => {
  let { pseudo, password } = req.body;

  password = sha256(password).toString();

  let result = null;
  await pool
    .query("INSERT INTO admin (pseudo, password) VALUES ($1, $2);", [
      pseudo,
      password,
    ])
    .then((_response) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return res.json(result);
};

export const getAllAdmins = async (req, res) => {
  let result = null;

  await pool
    .query("SELECT * FROM admin")
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getAdminById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("SELECT * FROM admin WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const { pseudo, password } = req.body;

  let result = null;
  pool
    .query("UPDATE utilisateur SET pseudo = $1, password =$2  WHERE id = $3;", [
      pseudo,
      password,
      id,
    ])
    .then((_res) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return res.json(result);
};

export const deleteAdminById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM admin WHERE id = $1;", [id])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.error(error));
  return res.json(result);
};
//#endregion
