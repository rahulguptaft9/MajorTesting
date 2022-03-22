let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my get Api', () => {
    it('should be return status 200', function(done){
        chai
            .request('https://github.com/rahulguptaft9/MajorTesting')
            .get('/')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
});
