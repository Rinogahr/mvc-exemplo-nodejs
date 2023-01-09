module.exports.index = function( appLication, req, res ){
    let newsModel = new appLication.src.models.news();

    newsModel.getLastNews( function( err, result ){
        res.render("news/index", {news : result} );
    });
}