let mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let Event = mongoose.model("Event");

module.exports = {
  register: (req, res)=>{
    console.log("Registering User...")
    var salt = bcrypt.genSaltSync(8);
    User.findOne({email:req.body.email}, (err, theuser)=>{
      if(theuser === null){
        if(req.body.password){
          var hash = bcrypt.hashSync(req.body.password, salt);
          console.log('hashed password', hash);
          let newUser = new User ({first_name:req.body.first_name, last_name:req.body.last_name,
              username:req.body.username, email:req.body.email, zipcode:req.body.zipcode, password:hash});
          newUser.save((err,savedUser)=>{
            if(err){
              let errors = ""
              for (let i in err.errors){
                errors += err.errors[i].message + ","
              }
              return res.status(500).send(errors)
            }else{
              req.session.user = savedUser;
              return res.json(savedUser)
            }
          })
        }
    }else{
      return res.status(500).send("Username Already Exists")
    }
    })
  },

  login: (req, res)=>{
    User.findOne({username:req.body.username},(err, user)=>{
      if(user === null){
        return res.status(500).send("Username does not exist.")
      }else{
        if(bcrypt.compareSync(req.body.password, user.password)){
            req.session.user = user
            return res.json(user)
        }else{
            return res.status(500).send("Incorrect Password.")
        }
      }
    })
  },

  logout: (req,res)=>{
    req.session.destroy();
    res.redirect('/')
  },

  currentUser: (req, res)=>{
    if (req.session.user){
      return res.json(req.session.user)
    }else{
      return res.status(500).send("No user logged in.")
    }
  },

  allEvents: (req,res)=>{
    Event.find({}).exec((err,events)=>{
      if(err){
        console.log(err)
      }else{
        return res.json(events)
      }
    })
  }
}
