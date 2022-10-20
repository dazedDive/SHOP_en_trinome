CREATE TABLE customer(
   Id_customer VARCHAR(255),
   first_name VARCHAR(255),
   last_name VARCHAR(255),
   email VARCHAR(255),
   telephone VARCHAR(255),
   adress VARCHAR(255),
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_customer)
);

CREATE TABLE collection(
   Id_collection VARCHAR(255),
   name VARCHAR(255),
   description VARCHAR(255),
   img_src VARCHAR(255),
   img_alt VARCHAR(255),
   is_deleted VARCHAR(255),
   PRIMARY KEY(Id_collection)
);

CREATE TABLE command(
   Id_command VARCHAR(255),
   date_of_order DATE,
   transport_mode VARCHAR(255),
   transport_price DECIMAL(15,2),
   is_completed BOOLEAN,
   Id_customer INT,
   PRIMARY KEY(Id_command),
   FOREIGN KEY(Id_customer) REFERENCES customer(Id_customer)
);

CREATE TABLE artist_kid(
   Id_artist_kid VARCHAR(255),
   name VARCHAR(255),
   biographie TEXT,
   img_src VARCHAR(255),
   img_alt VARCHAR(255),
   is_deleted VARCHAR(255),
   PRIMARY KEY(Id_artist_kid)
);

CREATE TABLE account(
   Id_account VARCHAR(255),
   pseudo VARCHAR(255),
   password VARCHAR(255),
   is_admin BOOLEAN,
   is_deleted BOOLEAN,
   Id_customer INT,
   PRIMARY KEY(Id_account),
   FOREIGN KEY(Id_customer) REFERENCES customer(Id_customer)
);

CREATE TABLE drawing(
   Id_drawing VARCHAR(255),
   name VARCHAR(255),
   description VARCHAR(255),
   size VARCHAR(255),
   price DECIMAL(15,2),
   is_top_selection BOOLEAN,
   is_deleted VARCHAR(255),
   Id_artist_kid INT,
   Id_command INT,
   Id_collection INT,
   PRIMARY KEY(Id_drawing),
   FOREIGN KEY(Id_artist_kid) REFERENCES artist_kid(Id_artist_kid),
   FOREIGN KEY(Id_command) REFERENCES command(Id_command),
   FOREIGN KEY(Id_collection) REFERENCES collection(Id_collection)
);

CREATE TABLE images(
   Id_images VARCHAR(255),
   img_src VARCHAR(255),
   image_alt VARCHAR(255),
   is_deleted BOOLEAN,
   Id_drawing INT,
   PRIMARY KEY(Id_images),
   FOREIGN KEY(Id_drawing) REFERENCES drawing(Id_drawing)
);
