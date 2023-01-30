const user = require('./user');
const comments = require('./comments');
const post = require('./post');
//const Upvotes = require('./Upvotes');


user.hasMany(post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

post.belongsTo(user, {
  foreignKey: 'user_id'
});

post.hasMany(comments, {
    foreignKey: 'post_id'
});

comments.belongsTo(user, {
  foreignKey: 'user_id'
});

comments.belongsTo(post, {
  foreignKey: 'post_id'
});

module.exports = { user, post, comments };
