const assert = require('assert');
const User = require('../src/user');

describe('Deleting an record', () => {

    let jack;
    beforeEach(done => {
        jack = new User({ username: 'Jack' });
        jack.save()
            .then(()=> done());
    });

    function assertUserIsNull(operation, done) {
        operation
            .then(() => User.findOne({ username: 'Jack' }))
            .then(user => {
                assert(user === null);
                done();
            });
    }

    it('can delete an existed record by instance', done => {
        assertUserIsNull(jack.remove(), done);

    });

    it('can delete by findOneAndRemove with Class', done => {
        assertUserIsNull(User.findOneAndRemove({username: 'Jack'}), done);
            
    });

    it('can delete by findByIdAndRemove with Class', done => {
        assertUserIsNull(User.findByIdAndRemove(jack._id) ,done);
            
            
    });

});
