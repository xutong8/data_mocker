import { insert_rel_rm_fc } from "./sql";
import db from "../../db";

const inventory_max = 500;

async function create_rel_rm_fc() {
  db.connect();
  for (let i = 0; i < 1000; i++) {
    const filterCakeId = i + 1;
    const materialId = Math.floor(Math.random() * 1000) + 1;
    const inventory = Math.random() * inventory_max;
    const values = [filterCakeId, materialId, inventory];
    const sql = insert_rel_rm_fc(values.length);
    await db.query(sql, values);
  }
  db.end();
}

export default create_rel_rm_fc;
