import { rel_date_fc } from "../../constant";

export const insert_rel_date_fc = (len: number) =>
  `insert into ${rel_date_fc.table_name} (${rel_date_fc.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
