const Post = require("../models/Comments")

const commentData = [
  {
    text: "Nice one",
    user_id: "3",
    post_id: "2"
  }, {
    text: "Nice one",
    user_id: "3",
    post_id: "2"
  }, {
    text: "Nice one",
    user_id: "3",
    post_id: "2"
  }, {
    text: "Nice one",
    user_id: "3",
    post_id: "2"
  },
  ];

  const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;  
