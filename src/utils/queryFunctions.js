import { pool } from '../models/pool';
import {
  insertLeagues,
  dropLeaguesTable,
  createLeagueTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropLeaguesTable ]);
export const createTables = () => executeQueryArray([ createLeagueTable ]);
export const insertIntoTables = () => executeQueryArray([ insertLeagues ]);