const userModel= require('../Models/user.model')

const render_signup = (req, res) => {
  res.render("signup");
};
const render_login =  (req, res) => {
  res.render("login");
}

const signup_auth = async(req, res) => {
  console.log(req.body);
  try {
    const newUsers = new userModel(req.body);
   await newUsers.save()
   res.redirect("/user/login");
    res.status(201).send("User saved!")
  } catch (err) {
    res.status(500).send("error signing up");
  }
};



const login_auth = (req, res) => {
  const loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  userModel
    .findOne({ email: loginData.email })
    .then((result) => {
      console.log(result);
      if (!result || result == null) {
        res.send("user not found user");
      } else {
        if (result.password == loginData.password) {
          console.log("login successfull");
          res.status(200).send(`welcome ${loginData.firstName}`);
        } else {
          res.status(501).send("incorrect password");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      // res.send("incorect password")
    });
};
module.exports={signup_auth, login_auth,render_signup,render_login}