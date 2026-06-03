import { Pool } from "pg";
import config from "@/config/config";
const pool = new Pool({
  connectionString: config.db_url,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
