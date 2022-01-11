import { pool } from "../database.js";

pool.connect

export const getAllHomeworks = async (req, res) => {
  let result;

  await pool
    .query(`SELECT * FROM homeworks`)
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error.stack));
  return res.json(result);
};

export const getHomeworkById = async (req, res) => {
  const { idHomework } = req.body;
  let result;

  await pool
    .query(
      `SELECT subject, homework_type, description, creationdate, deliverydate FROM homeworks WHERE id= $1;`,
      [idHomework]
    )
    .then((response) => {
      result = response.rows;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return res.json(result);
};

export const createHomework = async (req, res) => {
  const { subject, homeworkType, description, creationDate, deliveryDate } =
    req.body;

  let result;
  await pool
    .query(
      `INSERT INTO homeworks (subject, homework_type, description, creationdate, deliverydate);`,
      [subject, homeworkType, description, creationDate, deliveryDate]
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


export const deleteHomeworkById = async (req, res) => {
    const { idHomework } = req.body;

    let result 
    await pool
        .query(
            `DELETE FROM homeworks WHERE id = $1; `,
            [idHomework]
        )
        .then((_response) => {
            result = true
        })
        .catch((error) => {
            console.log(error);
            result = false
        })
    return res.json(result);
}