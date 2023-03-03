const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
.then(() => {
    console.log("Connected");
})
.catch(err => {
    console.log("error")
    console.log(err)
})

// Now we define a Schema for our movie class;

const movieSchema = new mongoose.Schema({
    // There are two ways in which we can define a schema
    title : {
        type: String,
        required: true
    },
    year: Number,
    rating : Number
}); 

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    {
        title:'Inception',
        year:2010,
        rating: 9.1
    },
    {
        title: 'Godfather',
        year:1982,
        rating: 9.5
    },
    {
        title: 'The Notebook',
        year:1992,
        rating: 9.3
    }
]).then(data=>{
    console.log('connected');
    console.log(data)
}).catch(err=>{
    console.log('error occured');
    console.log(err )
})