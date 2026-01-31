		-$ npm install -g @ionic/cli

be->  	-$ git clone https://github.com/AndreaL021/segna_presenze_be.git
		-$ cd segna_presenze_be
		-$ npm install
		- create a new schema
		- create .env 
	  		.env example:		
				DB_HOST=localhost
				DB_PORT=3306
				DB_USER=root
				DB_PASS=root
				DB_NAME=db_name
				JWT_SECRET=a74291e176e1856557c16a6d345f13301f69ea2c1c18bb0a2734b2563b582c19
				JWT_EXPIRES=30m
				REFRESH_SECRET=497b9e57ce34d8e8abee69f0e9a4505b4803bd0114a8284186945862bba507bf
				REFRESH_EXPIRES=1y

		-$ npm run start (http://localhost:3000)
		
		- run this query to add the first user:
		-> INSERT INTO `users` (`email`, `password`, `name`, `role`) VALUES
		('admin@email.com', '$2b$10$QgYwDxCmlbHdWAnN5lPJqO/vCg7ZuttdFU7uEi2OyfOpBaYKXnnFm', 'test', 'admin');
	
	

fe->  	-$ git clone https://github.com/AndreaL021/segna_presenze_fe.git
		-$ cd segna_presenze_fe
		-$ npm install
		-$ ionic serve
		- Browser: http://localhost:8100


		(email: admin@email.com, password: Prova)


