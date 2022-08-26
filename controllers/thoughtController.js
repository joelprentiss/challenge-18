const {Thought}=require('../models/thought');

const thoughtCount = async()=>
Thought.aggregate()
.count('thoughtCount')
.then((numberOfThoughts)=> numberOfThoughts);

module.exports={
    getThought(req,res){
        Thought.findOne({_id: req.params.userId})
        .select('-_v')
        .then(async (user)=>{
            !Thought
            ? res.status(404).json({message: 'No thoughts from this user'})
            : res.json({
                Thought
            })
            .catch(err);
            console.log(err);
            return res.status(500).json(err);
        });
        createThought(req,res);{
            Thought.create(req.res)
            .then((thought)=>res.json(thought))
            .catch((err)=>res.status(500).json(err));
        };
        deleteThought(req,res);{
            Thought.findOneAndUpdate({_id: req.params.userId})
            .then((thought)=>
            !thought
            ?res.status(404).json({message:'No thoughts from this User'})
            :Thought.findOneAndUpdate(
                {thought: req.params.thoughtId},
                {$pull: {thought: req.params.thoughtId}},
                {new: true}
            )
            )
        };
    }
}

module.exports = {thoughtCount, getThought, createThought, deleteThought};