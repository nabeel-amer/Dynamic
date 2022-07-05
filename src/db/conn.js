const mongoose = require ("mongoose");
// creating a database
mongoose.connect ("mongodb://localhost:27017/Nabeel", {
}).then(() => {
console.log( "connection successful");
}).catch((error) => {
console.log(error);
})
