import { insert_rel_date_rm } from "./sql";
import db from "../../db";
import dayjs from "dayjs";

async function create_rel_date_rm() {
  db.connect();

  const materialId = 1;
  const materialDate1 = dayjs().format("YYYY-MM-DD");
  const values1 = [materialId, materialDate1, 364];

  const sql1 = insert_rel_date_rm(values1.length);
  await db.query(sql1, values1);

  const materialDate2 = dayjs().subtract(1, "month").format("YYYY-MM-DD");
  const values2 = [materialId, materialDate2, 340];

  const sql2 = insert_rel_date_rm(values2.length);
  await db.query(sql2, values2);

  db.end();
}

export default create_rel_date_rm;
