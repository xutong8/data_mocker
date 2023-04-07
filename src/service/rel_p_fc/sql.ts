import { rel_p_fc } from "../../constant";

export const insert_rel_p_fc = (len: number) =>
  `insert into ${rel_p_fc.table_name} (${rel_p_fc.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
