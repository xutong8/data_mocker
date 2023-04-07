import { tb_raw_material } from "../../constant";

export const insert_tb_raw_material = (len: number) =>
  `insert into ${tb_raw_material.table_name} (${tb_raw_material.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
