import { tb_product } from "../../constant";

export const insert_tb_product = (len: number) =>
  `insert into ${tb_product.table_name} (${tb_product.columns.join(
    ", "
  )}) values (${new Array(len).fill("?").join(", ")})`;
