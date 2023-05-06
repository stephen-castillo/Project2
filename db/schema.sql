CREATE DATABASE quickdecks;

-- Create two new databases --
DROP DATABASE IF EXISTS quickdecks;
CREATE DATABASE quickdecks;

-- Use quickdecks --
USE quickdecks;

CREATE TABLE user
(
    first_name VARCHAR(30) NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    equipment_donated TEXT NOT NULL,
    date_donated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE user_dashboard
(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email BOOLEAN NOT NULL,
    phone TEXT NOT NULL,
    equipment_donated TEXT NOT NULL,
    equipment_recieved TEXT NOT NULL,
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE inventory
(
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email BOOLEAN NOT NULL,
    phone TEXT NOT NULL,
    product_name TEXT NOT NULL,
    equipment_donated TEXT NOT NULL,
    connection_type TEXT NOT NULL,
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE customers
(
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email BOOLEAN NOT NULL,
    phone TEXT NOT NULL,
    equipment_recieved TEXT NOT NULL,
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);


-- See database in use --
SELECT DATABASE
();
