const db = require('../models');
const index = (req, res) => {
  db.user.find({}, (error, user) => {
      if (error) return res.status(400).json({error: error.message})

      return res.status(200).json(user)
  })
}
  
const create = (req, res) => {
    db.user.create(req.body, (error, createdUser) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(201).json(createdUser); //  .json() will send proper headers in response so client knows it's json coming back
    });
  };

  const destroy = (req, res) => {
    db.user.findByIdAndDelete(req.params.id, (error, deletedUser) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        message: `User ${deletedUser.name} deleted successfully`
      });
    });
  };

  const update = (req, res) => {
    db.user.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body
      }, 
      { new: true }, 
      (error, updatedUser) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(updatedUser)
    });
  };
  
  module.exports = {
      index,
      create,
      destroy, 
      update, 
  }