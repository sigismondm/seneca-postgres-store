--
-- run with psql -U postgres -f dbschema.sql
--
DROP DATABASE senecatest;
CREATE DATABASE senecatest WITH ENCODING='UTF8' CONNECTION LIMIT=-1;

DROP ROLE senecatest; 
CREATE ROLE "senecatest" LOGIN PASSWORD 'senecatest';

--# connect to the database (works for psql)
\c senecatest

CREATE TABLE foo 
(
  id character varying, 
  p1 character varying, 
  p2 character varying 
);
ALTER TABLE foo OWNER TO senecatest;

CREATE TABLE moon_bar 
( 
  str character varying, 
  id character varying, 
  "int" integer,  
  bol boolean, 
  wen timestamp with time zone, 
  mark character varying, 
  "dec" real, 
  arr text, 
  obj text, 
  seneca  text 
);
ALTER TABLE moon_bar OWNER TO senecatest;

