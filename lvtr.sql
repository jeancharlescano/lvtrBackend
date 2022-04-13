------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------



------------------------------------------------------------
-- Table: admin
------------------------------------------------------------
CREATE TABLE public.admin(
	id         SERIAL NOT NULL ,
	pseudo     VARCHAR (50) NOT NULL ,
	password   VARCHAR (255) NOT NULL  ,
	CONSTRAINT admin_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: homework
------------------------------------------------------------
CREATE TABLE public.homework(
	id              SERIAL NOT NULL ,
	matiere         VARCHAR (255) NOT NULL ,
	type            VARCHAR (25) NOT NULL ,
	date_creation   DATE  NOT NULL ,
	date_rendu      DATE  NOT NULL ,
	description     VARCHAR (2000) NOT NULL ,
	id_admin        INT  NOT NULL  ,
	CONSTRAINT homework_PK PRIMARY KEY (id)

	,CONSTRAINT homework_admin_FK FOREIGN KEY (id_admin) REFERENCES public.admin(id)
)WITHOUT OIDS;



------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------



------------------------------------------------------------
-- Table: admin
------------------------------------------------------------
CREATE TABLE public.admin(
	id         SERIAL NOT NULL ,
	pseudo     VARCHAR (50) NOT NULL ,
	password   VARCHAR (255) NOT NULL  ,
	CONSTRAINT admin_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: homework
------------------------------------------------------------
CREATE TABLE public.homework(
	id              SERIAL NOT NULL ,
	matiere         VARCHAR (255) NOT NULL ,
	type            VARCHAR (25) NOT NULL ,
	date_creation   DATE  NOT NULL ,
	date_rendu      DATE  NOT NULL ,
	description     VARCHAR (2000) NOT NULL ,
	id_admin        INT  NOT NULL  ,
	CONSTRAINT homework_PK PRIMARY KEY (id)

	,CONSTRAINT homework_admin_FK FOREIGN KEY (id_admin) REFERENCES public.admin(id)
)WITHOUT OIDS;



