const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '58e6f28460635d73254d8765'}).then((todo) => {

});

// Todo.findByIdAndRemove()
Todo.findByIdAndRemove('58e6f28460635d73254d8765').then((todo) => {
  console.log(todo);
});
