-- Inserts de la tabla de departamentos, se solicita el nombre del departamento, ciudad del departamento y teléfono

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('DIR','Barcelona', 934226070)

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('DIR','Girona', 972238970)

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('DIS','Lleida', 973235040)

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('DIS','Barcelona', 932248523)

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('PROG','Tarragona', 977333852)

INSERT INTO departamentos(nombre_dep, ciudad_dep, telefono)
VALUES('PROG','Girona', 972235091)

-- Inserts de la tabla de clientes, se solicita el código del cliente, nombre del cliente, nif, dirección, ciudad y teléfono

INSERT INTO clientes(codigo_cli, nombre_cli, nif, direccion, ciudad, telefono)
VALUES(10,'EGIGSA', '38.567.893-C', 'Aragón 11','Barcelona', NULL)

INSERT INTO clientes(codigo_cli, nombre_cli, nif, direccion, ciudad, telefono)
VALUES(20,'CME', '38.123.898-E', 'Valencia 22','Girona', '972.23.57.21')

INSERT INTO clientes(codigo_cli, nombre_cli, nif, direccion, ciudad, telefono)
VALUES(30,'ACME', '36.432.127-A', 'Mallorca 33','Lleida', '973.23.45.67')

INSERT INTO clientes(codigo_cli, nombre_cli, nif, direccion, ciudad, telefono)
VALUES(40,'JGM', '38.782.345-B', 'Rosellón 44','Tarragona', '977.33.71.43')

--Inserts de la tabla de proyectos, se solicita el código del proyecto, precio, fecha de inicio, fecha prevista de finalización, fecha real de finalización y código del cliente
INSERT INTO proyectos(codigo_proyec, nombre_proyec, precio, fecha_inicio,fecha_prev_fin, fecha_fin,  codigo_cliente)
VALUES(1, 'GESCOM', 1.0E+6, '01-01-1998', '01-01-1999', NULL, 10)

INSERT INTO proyectos(codigo_proyec, nombre_proyec, precio, fecha_inicio, fecha_prev_fin, fecha_fin, codigo_cliente)
VALUES(2, 'PESCI', 2.0E+6, '10-01-1996', '03-31-1998', '05-01-1998', 10)

INSERT INTO proyectos(codigo_proyec, nombre_proyec, precio, fecha_inicio, fecha_prev_fin, fecha_fin, codigo_cliente)
VALUES(3, 'SALSA', 1.0E+6, '10-02-1998', '01-02-1999', NULL, 20)

INSERT INTO proyectos(codigo_proyec, nombre_proyec, precio, fecha_inicio, fecha_prev_fin, fecha_fin, codigo_cliente)
VALUES(4, 'TINELL', 4.0E+6, '01-01-1997', '01-12-1999', NULL, 30)

-- Inserts de la tabla de empleados, se solicita el código del empleado, nombre del empleado, apellido del empleado, sueldo, nombre del departamento, ciudad del departamento y número del proyecto 

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(1, 'María', 'Puig', 1.0E+5, 'DIR', 'Girona', 1)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(2, 'Pedro', 'Mas', 9.0E+4, 'DIR', 'Barcelona', 4)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(3, 'Ana', 'Ros', 7.0E+4, 'DIS', 'Lleida', 3)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(4, 'Jorge', 'Roca', 7.0E+4, 'DIS', 'Barcelona', 4)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(5, 'Clara', 'Blanc', 4.0E+4, 'PROG', 'Tarragona', 1)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(6, 'Laura', 'Tort', 3.0E+4, 'PROG', 'Tarragona', 3)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(7, 'Rogelio', 'Salt', 4.0E+4, NULL, NULL, 4)

INSERT INTO empleados(codigo_empl, nombre_empl, apellido_empl, sueldo, nombre_dep, ciudad_dep, num_proyec)
VALUES(8, 'Sergio', 'Grau', 3.0E+4, 'PROG', 'Tarragona', NULL)

