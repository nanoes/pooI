var articles = [
    {
        name: "tv",
        cost: 200,
    },
    {
        name: "bici",
        cost: 600,
    },
    {
        name: "laptop",
        cost: 300,
    }
];

var articlesFiltered = articles.filter(
    function (articles) {
        return articles.cost <= 200
    });

    articlesFiltered;

    /* map */

    var nameArticles = articles.map(function(article){
        return article.name 
    });

        nameArticles

    var  findArticle= articles.find(function(article){
        return article.name === "laptop"
    });

    findArticle


    articles.forEach(function(article){
        console.log(article.name);
    });

    var cheapArticles =  articles.some( function(article) {
        return article.cost <=700       
    });
    // out ->  true.