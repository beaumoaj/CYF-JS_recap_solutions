const music = require("./MusicNews");
let newsItems = music.getMusicNews();
/*
    newsItems is a list of objects.  Each object has the following properties:
    source
    author
    title
    description
    url:
    urlToImage:
    publishedAt:
    content:
*/

// -------------------------------------------------------------------
// DO NOT EDIT ANYTHING ABOVE THIS LINE

// print how many items of music news are there
console.log(newsItems.length);

// print all of the authors of all the new items
newsItems.forEach(function (value) {
  console.log(value.author);
});

// collect all the news articles by Joseph Green and print the titles of those articles
let JGArticles = newsItems.filter(function (value) {
  return value.author === "Joseph Green";
});

JGArticles.forEach(function (value) {
  console.log(`Article: ${value.title}`);
});

// use the find function to find the first article by "Kris Holt";
function findJG(article) {
  return article.author === "Kris Holt";
}

const r = newsItems.find(findJG);
console.log(r.title);

// use the map function to get a list of all the published dates
let dates = newsItems.map(function (article) {
  return article.publishedAt;
});
console.log(dates);

// get all of the articles that were published on 20 Jan 2021 or later
// the field you need is called publishedAt
// the date is formatted like this: "2021-01-27T18:30:00Z"
// the result should be a list of new objects with a
// title attribute which is the title of the article and a
// date attribute which is the publishedAt value
/*
Do this in TWO steps:
1.  Figure out what you need to do to extract the date
2.  Come up with a plan, in english not Javascript
3.  Bring the plan back and we will discuss the plans
4.  Implement your plans.
*/

let recent = newsItems.filter(function (article) {
    let pub = article.publishedAt
    let idx = pub.indexOf('T');
    let date = pub.substring(0,idx).split('-');
    console.log(`Date ${date[2]}`);
    if (date[0] === '2021' && date[1] === '01' && parseInt(date[2]) > 20) {
        return article.title;
    } 
}).map(function(article) {
    return {title:article.title, date:article.publishedAt};
});

console.log(recent);

