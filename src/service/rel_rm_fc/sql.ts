import { rel_rm_fc } from "../../constant";

export const insert_rel_rm_fc = (len: number) =>
  `insert into ${rel_rm_fc.table_name} (${rel_rm_fc.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;