import { rel_fc_fc } from "../../constant";

export const insert_rel_fc_fc = (len: number) =>
  `insert into ${rel_fc_fc.table_name} (${rel_fc_fc.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
