Use module.exports instead of exports.

EX: use module.exports = {a: 'b'}; not exports.b = 'c';


Functions can be executed immediately after requiring them in the relp.

EX: require('./anon-function')()

An important aside; Node must be restarted after changing files in order
for those changes to take affect.

Look into browserify and webpack (just out of curiousity).

Read up and tell class tomorrow about my assigned module.

Watch the presentation by the guy who invented node.
