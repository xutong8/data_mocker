import { tb_filter_cake } from "../../constant";

export const insert_tb_filter_cake = (len: number) =>
  `insert into ${tb_filter_cake.table_name} (${tb_filter_cake.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
