const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/**
 * add before() or beforeEach() ... outside of all describe() blocks
 *  will cause the callback to  before() or beforeEach() ... to run before any test case, 
 * regardless of the file it lives in (this is because Mocha has an implied describe() block, called the “root suite”)
 */


before(done => {
    mongoose.connect('mongodb://localhost/user_test');
    mongoose.connection
        .once('open', ()=> done())
        .on('error', () => { console.error('connect error !') });
});

beforeEach(done => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});

