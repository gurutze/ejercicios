db.createCollection("articles")
/*
blank 
db.articles.insert(
{
    "sku": 
	"prodname":
	"price":
	"description":
})
*/
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