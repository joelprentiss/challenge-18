const {Reactions} = require('../models/reactions');

const reactionCount = async()=>
Reactions.aggregate()
.count('reactionCount')
.then((numberOfReactions)=> numberOfReactions);

module.exports={
createReaction(req, res){
    Reactions.create(req.body)
    .then((reaction)=> res.json(reaction))
    .catch((err)=>res.status(500).json(err));
},
    deleteReaction(req,res){
        Reactions.findOneAndRemove({_id: req.params.reactionId})
        .then((reaction)=> res.json(reaction))
        .catch((err)=<res.ststus(500).json(err));
    },

}

module.exports = {createReaction, deleteReaction, reactionCount};