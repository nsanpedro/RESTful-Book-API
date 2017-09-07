var should = require('should'),
	sinon = require('sinon');


describe('Book Controller Test', function(){
	describe('Post Tests', function(){
		it('Should not allow empty title on post', function(){
			var book = function(book){this.save = function(){}}

			var req = {
				body: {
					author: 'George HH Martin'
				}
			}
			var res = {
				status: sinon.spy(), 
				send: sinon.spy() 
			}

			var bookController = require('../Controllers/bookController')(Book);

			bookController.post(req, res);
			
			res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0]);
			res.send.calledWith('Title is required').should.equal(true); 
		});
	});

});	