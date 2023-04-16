import create_tb_raw_material from "./tb_raw_material";
import create_tb_product_series from "./tb_product_series";
import create_tb_product from "./tb_product";
import create_tb_filter_cake from "./tb_filter_cake";

async function create_tb() {
  // 创建tb_raw_material表
  await create_tb_raw_material();
  console.log("tb_raw_material created🚗🚗🚗...");

  // 创建tb_product_series表
  await create_tb_product_series();
  console.log("tb_product_series created🚗🚗🚗...");

  // 创建tb_product表
  await create_tb_product();
  console.log("tb_product created🚗🚗🚗...");

  // 创建tb_filter_cake表
  await create_tb_filter_cake();
  console.log("tb_filter_cake createed🚗🚗🚗...");
  
  console.log("all tables created🌟🌟🌟...");
}

export default create_tb;
