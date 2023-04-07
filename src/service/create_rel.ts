import create_rel_p_rm from "./rel_p_rm";
import create_rel_p_fc from './rel_p_fc';

async function create_rel() {
  // 创建rel_p_rm表
  // await create_rel_p_rm();
  console.log("rel_p_rm created🚗🚗🚗...");
  
  // 创建rel_p_fc表
  await create_rel_p_fc();
  console.log('rel_p_fc createed🚗🚗🚗...');
}

export default create_rel;
