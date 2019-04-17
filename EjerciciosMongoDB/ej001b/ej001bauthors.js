db.createCollection("authors")
/*Ejercicio 3: Crea 3 autores introduciendo manualmente el _id para que sean distintos unos de otros. Lo campos por autor son: _id, nombre, edad, web

Ejercicio 4: Inserta 2 libros nuevos en la colección, diciendo que el primer libro sólo lo ha escrito el primer autor y el segundo libro lo han escrito los otros dos autores. Lo datos de cada libro serán: _id, titulo, genero, num_paginas, autores, precio

Ejercicio 5: Sentencia de consulta de los libros con al menos 200 páginas

Ejercicio 6: Saca los autores de los dos libros

Ejercicio 7: Saca el valor total de todos los libros de la colección
*/
db.authors.insert(
{
    "_id": "a1"
 	"name": "Albright",
	"age": "23",
 	"web": "albrightbooks.com", 
})
db.authors.insert(
{
    "_id": "e3"
 	"name": "Evergreen",
	"age": "21",
 	"web": "evergreenwrites.com", 
})
db.authors.insert(
{
    "_id": "e3"
 	"name": "Therrance",
	"age": "22",
 	"web": "therranceauthor.com", 
})