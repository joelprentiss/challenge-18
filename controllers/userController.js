const {User, Thought, Reactions} = require('../models');

const userCount = async()=>
    User.aggregate()
    .count('userCount')
    .then ((numberOfUsers)=> numberOfUsers);

    module.exports ={
        getUser(req, res){
            User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
              !student
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json({
                    user,
                    
                  })
            )
            .catch((err) => {
              console.log(err);
              return res.status(500).json(err);
            });
        },
        
        createUser(req,res){
            User.create(req.bofy)
            .then((user)=> res.json(user))
            .catch((err)=>res.status(500),json(err));
        },
        deleteUser(req,res){
            User.findOneAndRemove({_id: req.params.userId})
            .then((user)=>
            !user
            ? res.status(404).json({message: 'No user found'})
            : User.findOneAndUpdate(
                {user: req.params.userId},
                {$pull: {user: req.params.userId}},
                {new: true}
            )
            )
          .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
          });
        }
    
    }