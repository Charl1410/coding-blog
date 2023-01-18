const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          // attributes: ['text'],
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        },
      ],
    });
    const post = postData.get({ plain: true });
    const comments = post.comments.map((c) => {
      return { ...c, isMyComment: c.user_id == req.session.user_id };
    });
    post.comments = comments;
    console.log('POST', post);
    res.render('postDetails', {
      ...post,
      logged_in: req.session.logged_in,
      isOwner: req.session.user_id === post.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
