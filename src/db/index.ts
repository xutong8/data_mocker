import mysql from 'mysql';
import config from './config';

// 创建连接对象
const conn = mysql.createConnection(config);
export default conn;