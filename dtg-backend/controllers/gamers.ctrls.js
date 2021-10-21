const db = require('../models');
const index = (req, res) => {
  db.gamer.find({}, (error, gamer) => {
      if (error) return res.status(400).json({error: error.message})

      return res.status(200).json(gamer)
  })
}
  
const create = (req, res) => {
    db.gamer.create(req.body, (error, createdGamer) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(201).json(createdGamer); //  .json() will send proper headers in response so client knows it's json coming back
    });
  };

  const destroy = (req, res) => {
    db.gamer.findByIdAndDelete(req.params.id, (error, deletedGamer) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        message: `Gamer ${deletedGamer.name} deleted successfully`
      });
    });
  };

  const update = (req, res) => {
    db.gamer.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body
      }, 
      { new: true }, 
      (error, updatedGamer) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(updatedGamer)
    });
  };
  
  module.exports = {
      index,
      create,
      destroy, 
      update, 
  }