import { tb_product_series } from "../../constant";

export const insert_tb_product_series = (len: number) =>
  `insert into ${
    tb_product_series.table_name
  } (${tb_product_series.columns.join(", ")}) values (${new Array(len)
    .fill("?")
    .join(", ")})`;
