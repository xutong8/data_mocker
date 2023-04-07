import { rel_date_rm } from "../../constant";

export const insert_rel_date_rm = (len: number) =>
  `insert into ${rel_date_rm.table_name} (${rel_date_rm.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
