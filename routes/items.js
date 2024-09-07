
const express  = require('express');
const router = new express.Router();
const Item = require('../item');


router.get('', (req, res, next) => {
    try {
        res.json({items})
    }catch(err){
        return next(err)
    }
    
})

router.post('', (req, res, next) => {
    const {name, price } = req.body;
    const item = {name, price};
    items.push(item) 
    res.status(201).json(item)
})

router.get('/:name', (req, res, next) => {
    try {
      let foundItem = Item.find(req.params.name);
      return res.json({item:foundItem});
    } catch(err){
      return next(err)
    }
  });
  

  
router.patch('/:name', (req, res, next) => {
    try {
      let foundItem = Item.update(req.params.name, req.body.price);
      return res.json({ item: foundItem });
    } catch (err) {
      return next(err)
    }
});

router.delete('/:name', (req, res, next) => {
    try {
      Item.remove(req.params.name);
      return res.json({message:'Deleted'});
    } catch (err) {
      return next(err)
    }
});

module.exports = router;