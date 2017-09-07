var should = require('should');
var request = require('supertest');
var app = ('../app.js');
var mongoose = require('mongoose');
var Book = mongoose.model('Book');
var agent = request.agent(app);


describe('Book Crud Test', function(){
	it('should allow a book to be posted and return a read and _id', function(done){
		var bookPost = {title: 'new Book', author: 'Tolkien', genre: 'fiction'};

		agent.post('api/books')
			 .send(bookPost)
			 .expect(200)
			 .end(function(err, res){
			 	results.body.read.should.equal(false);
			 	results.body.should.have.property('_id');

			 })
		});

	afterEach(function(done){
		Book.remove().exec();
		done();
	})

});