import { insert_rel_date_fc } from "./sql";
import db from "../../db";
import dayjs from "dayjs";

async function create_rel_date_fc() {
  db.connect();

  const filterCakeId = 2;
  const filterCakeDate1 = dayjs().format("YYYY-MM-DD");
  const values1 = [filterCakeId, filterCakeDate1, 480];

  const sql1 = insert_rel_date_fc(values1.length);
  await db.query(sql1, values1);

  const filterCakeDate2 = dayjs().subtract(1, "month").format("YYYY-MM-DD");
  const values2 = [filterCakeId, filterCakeDate2, 420];

  const sql2 = insert_rel_date_fc(values2.length);
  await db.query(sql2, values2);

  db.end();
}

export default create_rel_date_fc;
