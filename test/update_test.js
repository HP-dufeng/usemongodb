const assert = require('assert');
const User = require('../src/user');

describe('Updating an record', () => {

    let jack;
    beforeEach(done => {
        jack = new User({ username: 'Jack'});
        jack.save().then(()=> done());
    });

    function assertUserName(operation, done) {
        operation
            .then(() => User.findById(jack._id))
            .then(user => {
                assert(user.username === 'Chen');
                done();
            });
    }

    it('can update by instace itself', done => {
        assertUserName(jack.update({ username: 'Chen' }), done);

    });

});