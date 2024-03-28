create database eventos;

CREATE TABLE Campus (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

INSERT INTO Campus (nombre) VALUES
('Lima Centro'),
('Lima Sur'),
('Lima Norte'),
('Ate'),
('San Juan de Lurigancho'),
('Arequipa'),
('Piura'),
('Ica'),
('Chimbote'),
('Chiclayo'),
('Huancayo'),
('Trujillo');

CREATE TABLE Espacios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

INSERT INTO Espacios (nombre) VALUES
('POLIDEPORTIVO - PISO 16, TORRE 2 - FACO'),
('DOJO- PABELLÓN B, PISO 6 - SEDE CENTRAL'),
('ZONA VIDA UNIVERSITARIA, AULA 102'),
('AUDITORIO'),
('HALL'),
('PATIO PRINCIPAL'),
('ZONA VIDA UNIVERSITARIA'),
('ZONA DEPORTIVA'),
('CLUB BARSA'),
('AULA TALLER');

CREATE TABLE Docentes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    identificacion VARCHAR(20) UNIQUE,
    codigo_docente VARCHAR(10) UNIQUE,
    id_campus INT,
    id_espacio INT,
    CONSTRAINT fk_campus FOREIGN KEY (id_campus) REFERENCES Campus(id),
    CONSTRAINT fk_espacio FOREIGN KEY (id_espacio) REFERENCES Espacios(id)
);

INSERT INTO Docentes (nombre, identificacion, codigo_docente, id_campus, id_espacio) VALUES
('Nancy Saydy Pastor Armas', '9000010983', 'C22355', 1, 1),
('Jessica Lorena Ugarte Pamo', '9000010979', 'C22351', 1, 1),
('Esteban Felipe Paredes Castro', '9000010987', 'C22360', 2, 2),
('Alexander Sosa Valencia', '9000010980', 'C22352', 2, 2),
('Zendy Rubi Morales Ugarte', '9000010984', 'C22356', 3, 3),
('Leonel Ever Pamo Granda', '9000010981', 'C22353', 4, 4),
('Erika Milagros Quenaya Valencia', '9000010978', 'C22350', 3, 3),
('Daniela Elizabeth Castro Castro', '9000005954', 'C19396', 4, 4),
('Pamela Tatiana Cornejo Granda', '9000010982', 'C22354', 5, 5),
('Stephanie Karla Sosa Cornejo', '9000008974', 'C21029', 5, 5),
('Pool Gabriel García Morales', '9000009897', 'C21573', 6, 6),
('Claudia Andrea Cornejo Morales', '9000005952', 'C19394', 6, 6);




CREATE TABLE Eventos (
    id SERIAL PRIMARY KEY,
    nombre_evento VARCHAR(100),
    descripcion VARCHAR(255),
    tipo_evento VARCHAR(50),
    sub_tipo_evento VARCHAR(50),
    organizado_por INT,
    docente INT,
    campus INT,
    capacidad_vacantes INT,
    modo VARCHAR(50),
    ubicacion INT,
    fecha_inicio DATE,
    hora_inicio TIME,
    hora_fin TIME,
    CONSTRAINT fk_docente FOREIGN KEY (docente) REFERENCES Docentes(id),
    CONSTRAINT fk_campus FOREIGN KEY (campus) REFERENCES Campus(id),
    CONSTRAINT fk_ubicacion FOREIGN KEY (ubicacion) REFERENCES Espacios(id)
);

