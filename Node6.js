var path = require('path');
var fs = require('fs');

module.exports = function(pathFile, ext, callback){
    ext = '.' + ext;

    fs.readdir(pathFile, function(err, list){
        if (err){
            return callback(err);
        }

        var filtered=[];
        list.forEach(function(file){
            if(path.extname(file) === ext){
                filtered.push(file);
            }
        });
        return callback(null, filtered);
    })
    moduleFile(process.argv[2], process.argv[3], function(err, data){
        data.forEach(function(file){
            console.log(file);
        });
    });
};