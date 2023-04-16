import { insert_tb_product_series } from "./sql";
import db from "../../db";

const functions = ["防水", "抗冻", "耐热", "导电"];

async function create_tb_product_series() {
  db.connect();
  for (let i = 0; i < 1000; i++) {
    const pos = Math.floor(Math.random() * functions.length);
    const values = [`产业系列名称${i + 1}`, `${functions[pos]}`];
    const sql = insert_tb_product_series(values.length);
    await db.query(sql, values);
  }
  db.end();
}

export default create_tb_product_series;