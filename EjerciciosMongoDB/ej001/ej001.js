db.createCollection("clients")  
db.createCollection("articles")
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

db.articles.insert(
{
    "sku": "72527273070"
	"prodname": "RedVelvet"
	"price": "2.00"
	"description": "mu rico"
})
db.articles.insert(
{
    "sku": "49130034164"
	"prodname": "Carrot"
	"price": "1.90"
	"description": "very sano"
})
db.articles.insert(
{
    "sku": "36394390802"
	"prodname": "nosemeocurrenmas"
	"price": "1.00"
	"description": "no estoy creativa"
})
db.articles.find({ sku: "36394390802" })

db.clients.find({ cif: "E70880158" })

db.createCollection("orders")

function totalPrice(order){
	cuenta=0
	for (var i=0; i<ordpro.length;i++){
	linea=order.ordpro[i];
	cuenta +=linea= ["total"]
	}
	return cuenta
}
objeto['total']=totalPrice(order)
orders.insert(order)


db.orders.find({ name: "" })
result= orders.find({"client": ""}).sort({"date":1}).limit(1)
resut= orders.find({ "name": "" }).sort( { "total": 1 } ).limit(1)
db.orders.find({ "name": "" }).count()
result= db.pedidos.find({"name": name,"date":{"$gte":new Date(2018,1,1,0,0,0,0),"$lte":new Date(2018,12,31,23,59,59,0),}})
db.orders.aggregate([{$group:{ _id:"$name",totalPrice{$sum:"$totalPrice"}}}])