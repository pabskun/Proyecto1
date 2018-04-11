-- Creación de la base de datos
CREATE DATABASE bduoc; 
--Se indica que se va a utilizar la base de datos bduoc
use bduoc;

--Creación de la tabla clientes
CREATE TABLE clientes (
    codigo_cli INTEGER, 
    nombre_cli CHAR(30) NOT NULL, 
    nif CHAR (12), 
    direccion CHAR (30), 
    ciudad CHAR (20), 
    telefono CHAR (12), 
    PRIMARY KEY (codigo_cli), UNIQUE(nif) -- Creación de la llave primaria codigo_cli y definición del índice unique para el campo nif
); 
--Creación de la tabla departamentos
CREATE TABLE departamentos (
    nombre_dep CHAR(20), 
    ciudad_dep CHAR(20), 
    telefono INTEGER DEFAULT NULL, 
    PRIMARY KEY (nombre_dep, ciudad_dep) -- se defin la llave primaria compuesta por el nombre del departamento y la ciudad del departamento
); 
--Creación de la tabla proyectos
CREATE TABLE proyectos (
    codigo_proyec INTEGER, 
    nombre_proyec CHAR(20), 
    precio REAL, 
    fecha_inicio DATE, 
    fecha_prev_fin DATE, 
    fecha_fin DATE DEFAULT NULL, 
    codigo_cliente INTEGER, 
    PRIMARY KEY (codigo_proyec), -- Definición de la llave primaria codigo_proyec
    FOREIGN KEY (codigo_cliente) REFERENCES clientes (codigo_cli), -- Definición de la llave foránea del campo código de cliente que viene de la tabla clientes
    CHECK (fecha_inicio < fecha_prev_fin), -- check constraint que verifica que la fecha de inicio sea menor a la fecha prevista de final
    CHECK (fecha_inicio < fecha_fin) -- check constraint que verifica que la fecha de inicio sea menor a la fecha final

); 
--Creación de la tabla empleados
CREATE TABLE empleados (
    codigo_empl INTEGER, 
    nombre_empl CHAR (20), 
    apellido_empl CHAR(20), 
    sueldo REAL CHECK (sueldo > 7000),  -- check constraint que verifica que el sueldo sea mayor a 7000
    nombre_dep CHAR(20),
	ciudad_dep CHAR(20), 
    num_proyec INTEGER, 
    PRIMARY KEY (codigo_empl), -- Definición de la llave primaria codigo_empl
    FOREIGN KEY (nombre_dep, ciudad_dep) REFERENCES departamentos (nombre_dep, ciudad_dep), -- Definición de las llaves foráneas nombre_dep y ciudad_dep que vienen de la tabla departamentos
    FOREIGN KEY (num_proyec) REFERENCES proyectos (codigo_proyec) -- Definición de la llave foránea del campo num_proyec  que viene de la tabla proyectos
); 