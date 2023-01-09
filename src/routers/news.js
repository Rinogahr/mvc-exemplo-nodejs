module.exports = function(appLiaction){
    appLiaction.get('/', ( req, res ) => {
        appLiaction.src.controllers.news.index( appLiaction, req, res );
    });
}