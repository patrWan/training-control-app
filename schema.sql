DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (UserId INTEGER PRIMARY KEY AUTOINCREMENT, UserName TEXT, UserPassword TEXT, UserFirstName TEXT, UserLastName TEXT);
INSERT INTO Users (UserName, UserPassword, UserFirstName, UserLastName) VALUES 
('patrwan', '123456', 'Patricio', 'González Camilo');