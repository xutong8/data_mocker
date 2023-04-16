import create_rel_p_rm from "./rel_p_rm";
import create_rel_p_fc from './rel_p_fc';
import create_rel_fc_fc from "./rel_fc_fc";
import create_rel_date_rm from "./rel_date_rm";
import create_rel_date_fc from "./rel_date_fc";

async function create_rel() {
  // 创建rel_p_rm表
  await create_rel_p_rm();
  console.log("rel_p_rm created🚗🚗🚗...");

  // 创建rel_p_fc表
  await create_rel_p_fc();
  console.log('rel_p_fc created🚗🚗🚗...');

  // 创建rel_fc_fc表
  await create_rel_fc_fc();
  console.log('rel_fc_fc created🚗🚗🚗...');

  // 创建rel_date_rm表
  await create_rel_date_rm();
  console.log('rel_date_rm created🚗🚗🚗...');

  // 创建rel_date_fc表
  await create_rel_date_fc();
  console.log('rel_date_fc created🚗🚗🚗...');
}

export default create_rel;
