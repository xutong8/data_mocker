import create_db from './service/create_tb';
import create_rel from './service/create_rel';

// 主任务
async function main_task() {
  // 创建表结构
  await create_db();
  // 创建关系表结构
  await create_rel();
}

main_task();