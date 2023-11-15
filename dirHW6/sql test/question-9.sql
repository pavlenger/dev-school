CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    email varchar NOT NULL UNIQUE,
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    user_password varchar NOT NULL
);

INSERT INTO users (username, email, first_name, last_name, user_password)
VALUES ('pavlenger', 'venger.pavlo@gmail.com', 'Pavlo', 'Venher', 'wiencowfc')
RETURNING user_id, username, email, first_name, last_name, user_password;
