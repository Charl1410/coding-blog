const router = require('express').Router();
const { Post, User, Comments  } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          { model: Comments,
          attributes: ['text']
          }
        ],      
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log (posts)
  
      res.render('homepage', { 
        posts, 
        //logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          { model: Comments,
          attributes: ['text']
          }
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        post,
        //logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });






module.exports = router;