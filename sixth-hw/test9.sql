CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, username, first_name, last_name, password) VALUES ('linichenko.ivan@lll.kpi.ua', 'VlIO_OIlV', 'Ivan', 'Linichenko', 'qwerty12345');