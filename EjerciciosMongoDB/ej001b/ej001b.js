db.createCollection("authors")
db.createCollection("books")
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
db.books.insert(
{
    "_id": ObjectId
 	"title": "Evolución de Orsterra",
	"genre": "Historia",
 	"pagenum": 199,
 	"author": "Albright",
 	"price": "18.00"   
})
db.books.insert(
{
    "_id": ObjectId
 	"title": "La curandera de Myðarr",
	"genre": "Fantasía",
 	"pagenum": 359,
 	"author": "Evergreen",
 	"price": "21.00"   
})
db.books.insert(
{
    "_id": ObjectId
 	"title": "Guía para tontos del arte de robar",
	"genre": "Comedia",
 	"pagenum": 285,
 	"author": "Therrance",
 	"price": "19.50"   
})db.books.insert(
{
    "_id": ObjectId
 	"title": "Your Last Name",
	"genre": "Comedia",
 	"pagenum": 457,
 	"author": "Therrance, Evergreen",
 	"price": "25.00"   
})

db.books.find({pagenum:{$gte:200}})
