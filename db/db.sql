-- Snippets
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255)  NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(80) NOT NULL UNIQUE, 
    image VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    is_avalible BOOLEAN NULL, 
    create_at TIMESTAMP(0) NOT NULL,
    update_at TIMESTAMP(0) NOT NULL
)