db.createCollection("orders")
/*
blank 
order=(
{
	"name":
	"address":
	"total": 
	"ordpro":[
	{"sku", "proname", "price", "quantity", "prototal"}
	]
	"date": new Date
})
	
*/
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