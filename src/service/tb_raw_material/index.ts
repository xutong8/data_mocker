import { insert_tb_raw_material } from "./sql";
import db from "../../db";

const isOridinaryMaterial = ["是", "否"];

async function create_tb_raw_material() {
  db.connect();
  for (let i = 0; i < 1000; i++) {
    const values = [
      `原料${i + 1}`,
      `CNB${i + 1}`,
      Math.floor(Math.random() * 500),
      isOridinaryMaterial[
        Math.floor(Math.random() * isOridinaryMaterial.length)
      ],
      `规格${i + 1}`
    ];
    const sql = insert_tb_raw_material(values.length);
    await db.query(sql, values);
  }
  db.end();
}

export default create_tb_raw_material;