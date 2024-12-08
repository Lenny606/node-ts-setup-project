import { data } from "../data/data.js";

export const sendResponse = (res, statusCode) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.status(200).send({ data });
};
