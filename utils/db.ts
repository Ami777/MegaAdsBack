import {createPool} from "mysql2/promise";
import { config } from "../config/config";

export const pool = createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    namedPlaceholders: true,
    decimalNumbers: true,
});
