const assert = require('assert');
const User = require('../src/user');

describe('Save a user', () => {

    it('Create a record', done => {
        let jack = new User({ username: 'Jack'});

        jack.save().then(() => {
            assert(!jack.isNew);
            done();
        });
    });

});