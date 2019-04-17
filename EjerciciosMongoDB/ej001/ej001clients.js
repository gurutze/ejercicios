db.createCollection("clients")  /*
	  Ejercicio 1:

Queremos gestionar los datos de una aplicación que debe gestionar clientes de una empresa de pasteles. 

Los datos a almacenar de los clientes son: nombre, cif, email, tlf y direccion.

Ejercicio 2:

Introduce un par de clientes de ejemplo

Ejercicio 3:

Sentencia de consulta de cliente pasando el cif, debe devolver los datos de esa empresa

Ejercicio 4:

El programa debe poder gestionar los pasteles (articulos) que vende a empresa

Los campos deberán ser: sku (código de articulo), nombre, precio , descripcion

Ejercicio 5:

Introduce tres artículos en la bbdd

Ejercicio 6:

Sentencia de consulta de un artículo por su SKU

Ejercicio 7:

Tenemos que almacenar los pedidos de los clientes  por lo que deberemos almacenar los siguientes datos: cliente, direccion de entrega, importe total, listado de productos: articulo, cantidad de artículo, precio total de articulo

Ejercicio 8:

Sentencia que consulta todos los pedidos de un cliente

Ejercicio 9:

Sentencia que devuelve el último pedido de un cliente

Ejercicio 10:

Sentencia que devuelve el pedido de mayor importe de un cliente

Para nota:

Sentencia que devuelve el total anual de de pedidos de un cliente dado
blank para copypaste
db.clients.insert(
{
    "_id": ObjectId
 	"name": "",
	"cif": "",
 	"email": "",
 	"tlf": ,
 	"address": ""   
})
 */

db.clients.insert(
{
    "_id": ObjectId
 	"name": "Manolo Blanco Rodriguez",
	"cif": "H29893617",
 	"email": "soymanolo@yahoo.es",
 	"tlf": 663040717,
 	"address": "Avenida Encinglin exemptà quimificava, 52 15ºE"   
})
db.clients.insert(
{
    "_id": ObjectId
 	"name": "Hassan Echevarría Sepúlveda",
	"cif": "E70880158",
 	"email": "HassanEchevarriaSepulveda@gustr.com",
 	"tlf": 712 850 514,
 	"address": "Carrera Acomodaràs esmortiu analitz, 26A 6ºA"   
})
db.clients.insert(
{
    "_id": ObjectId
 	"name": "Hilda Tejeda Salas",
	"cif": "P5327859D",
 	"email": "HildaTejedaSalas@superrito.com",
 	"tlf": 712 704 732,
 	"address": "Cañada Rojalera derrapassis, 192A 8ºE"   
})
db.clients.find({ cif: "E70880158" })