const fs = require('fs');

function news(){}

news.prototype.getLastNews = function(cb){
    fs.readFile('./data/noticias.json', 'utf8', function( err, result ){
        var data = [];

        if(!err){
            var obj = JSON.parse(result);

            if(obj.noticias.length > 4){
                var i = 4;
            }else{
                var i = obj.noticias.length - 1;
                console.log(i);
            }
            obj.noticias.forEach( (noticia) => {
                if( i >= 0 ){
                    data[i] = noticia;
                    i--;
                }
            });
        }
        cb( err, data);
    });
};

module.exports = function(){
    return news;
}