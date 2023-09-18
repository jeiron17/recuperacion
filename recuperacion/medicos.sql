create database medicos;
	use medicos;

create table usuarios
(
id_usu integer auto_increment not null,
Nom_usuario varchar(45)not null,
Correo_electronico varchar(200)not null,
Password_usu varchar(100)not null,
primary key(id_usu)
);

create table documento
(
id_documento varchar(20)not null,
tip_documento varchar(20)not null,
primary key(id_documento)
);

create table especialidad
(
id_especialidad varchar(20)not null,
nom_especialidad varchar(200)not null,
primary key(id_especialidad)
);

create table doctores
(
id_doc integer auto_increment not null,
Nom1_doctor varchar(45)not null,
Ape1_doctor varchar(45)not null,
Tip_documento varchar(20)not null,
Num_doc varchar(100)not null,
Especialidad varchar(20)not null,
primary key(id_doc)
);

insert into documento(id_documento,tip_documento)
	values(101,"C.C"),
		  (102,"C.E"),
		  (103,"T.I");


insert into especialidad(id_especialidad,nom_especialidad)
	values(10,"Alergología Clínica"),
			(11,"Anestesiología y Reanimación"),
			(12,"Cirugía General"),
			(13,"Cirugía Plástica"),
			(14,"Dermatología"),
			(15,"Ginecología y Obstetricia"),
			(16,"Medicina del Deporte y de la Actividad Física"),
			(17,"Medicina de Urgencias"),
			(18,"Medicina Física y Rehabilitación"),
			(19,"Medicina Interna"),
			(20,"Neurocirugía"),
			(21,"Neurología"),
			(22,"Oftalmología"),
			(23,"Ortopedia y Traumatología"),
			(24,"Otorrinolaringología"),
			(25,"Patología"),
			(26,"Pediatría"),
			(27,"Psiquiatría"),
			(28,"Radiología"),
			(29,"Toxicología Clínica"),
			(30,"Urología"),
			(31,"Cardiología Clínica"),
			(32,"Endocrinología Clínica y Metabolismo"),
			(33,"Endocrinología Pediátrica"),
			(34,"Enfermedades Infecciosas"),
			(35,"Hematología"),
			(36,"Hepatología Clínica"),
			(37,"Medicina Crítica y Cuidados Intensivos"),
			(38,"Medicina del Dolor"),
			(39,"Medicina Vascular"),
			(40,"Nefrología"),
			(41,"Nefrología pediátrica"),
			(42,"Neonatología"),
			(43,"Neurología Infantil"),
			(44,"Neurorradiología"),
			(45,"Psiquiatría"),
			(46,"Psiquiatría Pediátrica"),
			(47,"Radiología en Trauma y Urgencias"),
			(48,"Radiología Intervencionista"),
			(49,"Reumatología");