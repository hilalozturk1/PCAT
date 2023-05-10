const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connect db
mongoose.connect("mongodb://localhost/pcat-test-db");

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

const photos = [
  {
    title: 'Photo Title 1',
    description: 'Photo description 1'
  },
  {
    title: 'Photo Title 2',
    description: 'Photo description 2'
  },
  {
    title: 'Photo Title 3',
    description: 'Photo description 3'
  }
];

// 
photos.forEach(photoData => {
  const photo = new Photo(photoData);
  photo.save()
    .then(savedPhoto => {
      console.log('saved photo:', savedPhoto);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//(create a photo)
/*
Photo.create({
    title: 'Photo Title 2',
    description: 'Photo description 2'
});*/

// read a photo
/*
Photo.find()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
*/

//update a photo
/*
const id = "645bb0c1daab18ab450cf3ee";

Photo.findByIdAndUpdate(id, {
  title: "updated title",
  description: "updated description",
}, {new: true})
  .then((updatedData) => {
    console.log("updated data", updatedData);
  })
  .catch((e) => console.log(e));
  */

  // delete a photo
  /*
  const id = "645bb0c1daab18ab450cf3ee";

  Photo.findByIdAndDelete(id)
  .then(deletedPhoto => {
      console.log('deleted photo:', deletedPhoto);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  */