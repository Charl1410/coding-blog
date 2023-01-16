const User = require('./User');
const Comments = require('./Comments');
const Posts = require('./Post');
//const Upvotes = require('./Upvotes');


User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

Posts.hasMany(Comments, {
    //not sure about key
    foreignKey: 'user_id'
})

module.exports = { User, Posts, Comments };
