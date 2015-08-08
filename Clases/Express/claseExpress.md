# Express

## Middlewares

Es una serie de etapas. ABCD son middlewares.
Uno de estos middlewares puede ser el template engine. 

start -> a -> b -> c -> d (404) -> end
		 |					|
		 |					Si ninguno finalizó, entonces es 404, porque no tengo ese contenido.
		 c

# MongoDB

Database
	Collections
		- CRUD (create, read, update, delete)	
		Documents -> JSON


## Comandos

--- mongod --dbpath [PATH]

--- sudo mongod (arranca el server)
--- mongo (arranca la shell)

--- db (la base en la que estoy trabajando)
--- show collections --- muestra las collections que tiene la base
--- db.find({filtro}) (ya es multi)

### Crear DB
--- USE DBname (crea/se cambia a la DB que le digo)

### Insert
--- db.mycollection.insert({ ... }) --- crea la collection si no existe y le inserta el objeto

### Update
--- db.collection.update({parámetros de búsqueda}, {la data nueva}, {options}) ---> busca según el criterio que le paso, y pisa TODO el contenido del documento con lo que le paso en el segundo parámetro. "multi:true" en options para que pise todos los que encuentre.

### Remove
--- db.collection.remove({filtro}, {opciones}) *** YA ES MULTI ***