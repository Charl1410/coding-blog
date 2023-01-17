const router = require('express').Router();
const { Posts } = require('../models');

router.get('/', async (req, res) => {
    try {
      const postData = await Posts.findAll({
        //include: [
          //{
            //model: User,
            //attributes: ['name'],
         // },
        //],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', { 
        posts, 
        //logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;