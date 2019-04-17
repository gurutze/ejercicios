describe('Devuelve código 200 ',()=>{
it('GET / Devuelve un código 200', (done) => {
    chai.request(url)
      .get('/libros')
      .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});
