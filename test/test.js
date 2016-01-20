var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/#/home")
    .set('Accept', 'application/json')
    .expect("Content-type", 'text/html; charset=utf-8')
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
       console.log(err);
      done();
    });
  });


// #3 Api Test Response
  it("should return response from flickr 20",function(done){
  	this.timeout(150000);
    server
    .get('/api/flickr/getFlickr')
    .end(function(err, result) {
      result.body.length.should.equal(20);
        done();
    });
  });

// #3 Flickr timeout
  it("should get response from flickr in 2 sec",function(done){
    this.timeout(2000);
    server
    .get('/api/flickr/getFlickr')
    .end(function(err, result) {
      result.body.length.should.equal(20)
        //negative testing
        done();
    });
  });


  

 /* it("Length should be >=1",function(done){
    this.timeout(150000);
    //calling ADD api
    server
    .get('/api/flickr/getFlickr')
    .send({'tagvalue' : 'ok'})
    .expect("Content-type",/json/)
    .end(function(err,res){
      console.log(err);
      res.length.should.not.be.below(1);
      done();
    });
  });*/

});