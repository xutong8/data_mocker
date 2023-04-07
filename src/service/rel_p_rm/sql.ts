import { rel_p_rm } from "../../constant";

export const insert_rel_p_rm = (len: number) =>
  `insert into ${rel_p_rm.table_name} (${rel_p_rm.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
