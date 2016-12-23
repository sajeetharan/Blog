var mongoose = require('mongoose');
var Loc = mongoose.model('blog');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


/* GET list of blog */

//blogLista

module.exports.blogLista = function(req, res) {
console.log('Finding blog details', req.params);
  
    Loc
      .find()
      .exec(function(err, blog) {
        if (!blog) {
          sendJSONresponse(res, 404, {
            "message": "no lista"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(blog);
        sendJSONresponse(res, 200, blog);
      });

  return blog;
};

/*
module.exports.blogLista = function(req, res) {
//console.log('Finding location details', req.params);
  
    Loc
      .find()
      .exec(function(err, blog) {
        res.status = 200;
        res.json = blog;
      });

  //return blog;
};
*/
/* GET blog por id */
module.exports.blogReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.blogid) {
    Loc
      .findById(req.params.blogid)
      .exec(function(err, blog) {
        if (!blog) {
          sendJSONresponse(res, 404, {
            "message": "blogid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(blog);
        sendJSONresponse(res, 200, blog);
      });
  } else {
    console.log('No blogid specified');
    sendJSONresponse(res, 404, {
      "message": "No blogid in request"
    });
  }
};

/* POST a new location */
/* /api/blog */
module.exports.blogCreate = function(req, res) {
  console.log(req.body);
  Loc.create({
    autor: req.body.autor1,
    publicacion: req.body.publicacion,
    /*comentarios: [{
      autor: req.body.autor2,
      comentario: req.body.comentario,
    }]*/

  }, function(err, blog) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(blog);
      sendJSONresponse(res, 201, blog);
    }
  });
};


/* PUT /api/blog/blogid */
module.exports.blogUpdateOne = function(req, res) {
  if (!req.params.blogid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, bloid is required"
    });
    return;
  }
  Loc
    .findById(req.params.blogid)
    .select('-reviews -rating')
    .exec(
      function(err, blog) {
        if (!blog) {
          sendJSONresponse(res, 404, {
            "message": "blogid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }


        blog.autor = req.body.autor1,
        blog.publicacion = req.body.publicacion,
        /*blog.comentarios = [{
          autor: req.body.autor2,
          comentario: req.body.comentario,
        }],
*/

        location.save(function(err, blog) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, blog);
          }
        });
      }
  );
};

/* DELETE /api/blog/:blogid */
module.exports.blogDeleteOne = function(req, res) {
  var locationid = req.params.blogid;
  if (blogid) {
    Loc
      .findByIdAndRemove(blogid)
      .exec(
        function(err, blog) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("blog id " + blogid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No bloid"
    });
  }
};
