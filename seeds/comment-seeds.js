const Post = require("../models/Comments")

const commentData = [
  {
    comment_text: "Nice one",
    comment_id: "3"
  },
  {
    comment_text: "Really like it",
    comment_id: "5"
  },
  {
    comment_text: "Nice one",
    comment_id: "1"
  },
  {
    comment_text: "Nice one",
    comment_id: "2"
  }
  ];

  const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;  
