var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    autor: {type: String, required: true},
    publicacion: {type: String, required: true},
    //comentarios: [comentarioTimeSchema]
});

/*var comentarioTimeSchema = new mongoose.Schema({
    autor:{type: String, required: true},
    coentario: String,
});
*/


mongoose.model('blog', blogSchema);