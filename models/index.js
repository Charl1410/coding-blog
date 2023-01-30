const User = require('./user');
const Comments = require('./comments');
const Post = require('./post');
//const Upvotes = require('./Upvotes');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comments, {
    foreignKey: 'post_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comments };
