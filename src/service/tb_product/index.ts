import { insert_tb_product } from "./sql";
import db from "../../db";

const colors = ["红", "黄", "蓝", "绿", "紫"];
const processing_cost_max = 5000;
const processing_account_max = 100;

async function create_tb_product() {
  db.connect();
  for (let i = 0; i < 1000; i++) {
    const values = [
      `产品名称${i + 1}`,
      `产品编号${i + 1}`,
      `产品代码${i + 1}`,
      `${colors[Math.floor(Math.random() * colors.length)]}`,
      Math.floor(Math.random() * processing_cost_max),
      Math.floor(Math.random() * processing_account_max),
      Math.floor(Math.random() * 1000) + 1,
      `工厂${i + 1}`,
      "",
    ];
    const sql = insert_tb_product(values.length);
    await db.query(sql, values);
  }
  db.end();
}

export default create_tb_product;
