import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ebsap from "./Models/ebsap.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import nodemailer from 'nodemailer';
import payment from './Models/payment.js'
import jwt from "jsonwebtoken";
// import verifyToken from "./verifyToken.js";

const app = express();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.static('public'));

const port = 4000;

const allowedOrigins = [
    "http://localhost:5174",
    "http://localhost:5173",
    "https://style-curve-4wnucb9sp-sakeths-projects-dbd1767a.vercel.app",
    "https://style-curve-git-master-sakeths-projects-dbd1767a.vercel.app",
    "https://style-curve.vercel.app"
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  };
  
  app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/EBSAP?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

  app.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    const newUser = new ebsap({
      username,
      password,
    }); 
  
   if(await newUser.save()){
    console.log("succesfull registered");
    res.sendStatus(200);
    console.log(newUser);
   }
   else {
    console.log("error registering user");
   }
    
  });

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const currentUser = await ebsap.findOne({ username: username });
  
      if (currentUser) {
        if (currentUser.password === password) {
          console.log("successfully logged in");
          // generating a json web token
          const user = { username: currentUser.username, id: currentUser._id };
          jwt.sign(user, "SECRET", (err, token) => {
            if (err) throw err;
            res.cookie("token", token, { httpOnly: true }).json({ message: "successfully logged in" });
          });
        } else {
          console.log("wrong password");
          res.status(400).json({ message: "Invalid credentials" });
        }
      } else {
        console.log("user doesn't exist try registering");
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

  // Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'ebsap.co@gmail.com',
      pass: 'ebsap_india'
  }
});

console.log("Transporter created with email:", transporter.options.auth.user);

// Endpoint to handle forgot password request
app.post('/forgot_password', (req, res) => {
  const { email } = req.body;

  console.log("Sending email to:", email);

  // Send email with password reset link
  const resetLink = "`http://your-website.com/reset-password?token=${token}";
  const mailOptions = {
      from: 'ebsap.co@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      content: "reset your password"
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Failed to send email');
      } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully');
      }
  });
});

app.post("/save_payment", async (req, res) => {
  try {
    const { amount, option } = req.body;
    
    // Save payment details to the database
    const newPayment = new payment({
      amount,
      option
    });
    await newPayment.save();

    console.log("Payment details saved:", newPayment);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving payment details:", error);
    res.sendStatus(500);
  }
});

app.get("/profile", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "SECRET", async (err, decoded) => {
      if (err) {
          return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = decoded.id;

      try {
          const user = await ebsap.findById(userId);
          if (!user) {
              return res.status(404).json({ message: "User not found" });
          }

          res.status(200).json({ username: user.username });
      } catch (error) {
          console.error("Error fetching user:", error);
          res.status(500).json({ message: "Internal Server Error" });
      }
  });
});




app.listen(port , () => {
    console.log("succesfully listening on port " + port)
});

