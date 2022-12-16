const express= require("express");
const mongoose = require("mongoose");


// App config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  database connection 
mongoose.connect("mongodb://localhost:27017/reservationsDB",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});



//   Schema des Salles

const salleSchema = new mongoose.Schema({
      nom: {
        type: String,
        unique: true,
      },
      capaciteMax: {
        type: Number,
      },
      equipements: {
        type: [String],
        default: [],
      },
}); 
const equipements = {
  VC: ['pieuvre', 'webcam', 'ecran'],
  SPEC: ['tableau'],
  RS: ['Néant'],
  RC: ['tableau', 'ecran', 'pieuvre']
};
export const Salle = mongoose.model("Salle", salleSchema);


//  Schema des reservations

 const reservationSchema = new Schema({
    nomReunion: {
      type: String,
      required: true,
      unique: true,
    },
    typeReunion: {
        type: String,
        required: true,
    },
    nombrePersonnes: {
        type: Number,
        required: true,
    },
  });
export const Reservation = mongoose.model("Reservation", reservationSchema);



//api endpoint
app.get("/", function(req, res){
    res.send("Welcome to Our Meeting Planner !");

}); 

//listner
app.listen(port, function () {
    console.log(`listening on localhost: ${port}`);
});
