let div = document.getElementById("content");
//div.innerHTML = `<p>There are ${articles.length} news articles</p>`;

function addTitles() {

    articles.forEach(function (article) {
        let h2 = document.createElement("h2");
        h2.innerText= article.title;
        div.appendChild(h2);
    });
}

// addTitles();


function addTitlesAndImages() {
    articles.forEach(function (article) {
        let h2 = document.createElement("h2");
        h2.innerText= article.title;
        div.appendChild(h2);
        let img = document.createElement("img");
        img.src = article.urlToImage;
        div.appendChild(img);
    });
}

// addTitlesAndImages();
/*

In this exercise you should write two functions and declare a variable.

The variable will be called newsIndex and be assigned the value 0

Write a function called displayArticle will take an article as a 
parameter and then:
1. get the element whose id is "title" and set its innerText to be the title 
of the article.
2. get the element whose id is "image" and set its src to be the urlToImage of the article

Second function called newsPager:
1.  Create two button elements, a "next" button and a "previous" button, 
    append them to the div whose id is content.
2.  Create a <h1> element and set its id to "title" and append to the div whose id is content
3.  Create an <img> tag, set its id to "image" and append to the div whose id is content
4.  Call displayArticle and pass articles[newsIndex] as a parameter

Run this version, you should see the first news article

1. Add an onclick handler to the next and previous buttons and make the add or decrement the value of newsIndex and then call displayArticle, passing articles[newsIndex] as a parameter.

Run this version, check if there is an error if you click previous on the first article or next on the last article

1.  Fix any errors
*/
let newsIndex = 0;
function newsPager() {
    let next = document.createElement("button");
    next.innerText = "Next";
    div.appendChild(next);
    let prev = document.createElement("button");
    prev.innerText = "Previous";
    div.appendChild(prev);
    let h2 = document.createElement("h2");
    h2.id = "title";
    let img = document.createElement("img");
    img.id = "image";
    div.appendChild(h2);
    div.appendChild(img);
    displayArticle(articles[newsIndex]);
    next.onclick = function() {
        newsIndex = (newsIndex + 1) % articles.length;
        displayArticle(articles[newsIndex]);
    };
    prev.onclick = function() {
        newsIndex = newsIndex - 1;
        if (newsIndex < 0) {
            newsIndex = articles.length - 1;
        }
        displayArticle(articles[newsIndex]);
    }
}

function displayArticle(article) {
    let title = document.getElementById("title");
    title.innerText = article.title;
    let image = document.getElementById("image");
    image.src = article.urlToImage;
}

newsPager();
