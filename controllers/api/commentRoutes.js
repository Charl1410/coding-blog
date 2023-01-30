const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

//route to create a comment 
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
      // console.info(newPost)
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //need to a route to delete a comment!
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deleteComment = await Comments.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!deleteComment) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
