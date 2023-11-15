INSERT INTO language (name)
 VALUES ('Ukrainian') RETURNING language_id, name, last_update;