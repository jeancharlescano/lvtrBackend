import { homeworks } from "../mock.js";
let works = homeworks;

export const getAllHomework = async (req, res) => {
    res.send(works);
};

export const createHomework = async (req, res) => {
    console.log(req);
    works.push(
        req.body
    )

    res.send(works);
}