export const createLeagueTable = `
DROP TABLE IF EXISTS leagues;
CREATE TABLE IF NOT EXISTS leagues (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  price INT NOT NULL,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL
  )
  `;

export const insertLeagues = `
INSERT INTO leagues(name, price, lat, long)
VALUES ('SJ Basketball Association', 5500, 43.55, 73.55),
      ('Philly Dunk Squad', 12000, 44.77, -71.22)
`;

export const dropLeaguesTable = 'DROP TABLE leagues';
