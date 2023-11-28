
// This is the Javascript code to randomly choose a page file and
// go to that page, as seen on the home page. 

// Document selector and event listener for button

const randomButton = document.querySelector("#random");

randomButton.addEventListener("click", openRandomLink);



// randomizing function

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//testing it

console.log(getRandomNum(0, 10));


// Binding the home page link to a variable for ease of randomization

const main_page = "https://tspur1066.github.io/personal-thomas-spurlock/"


// Creating an array of links for each page

const links = [
    //Main Pages
    "README.html",
    "about.html",
    "404.html",
    "movies.html",

    // Church Blog Posts
    "posts%20(Topic%201)/",
    "posts%20(Topic%201)/post1",
    "posts%20(Topic%201)/post1/caesar.jpg",
    "posts%20(Topic%201)/post2",
    "posts%20(Topic%201)/post2/stpatrick.jpg",
    "posts%20(Topic%201)/post3",

    //Computer Science Blog Posts
    "posts%20(Topic%202)/",
    "posts%20(Topic%202)/post1",
    "posts%20(Topic%202)/post2",

    //Articles
    "articles/main.html",
    "articles/article_01.html",
    "articles/article_02.html",
    "articles/enhancement",

    //Pictures
    "images/anthony_of_padua.jpg",
    "images/ea1.png",
    "images/jerusalem_cross2.png",
    "images/me(2).jpg",
    "images/Roland_horn.jpg",
    "lucky_find.png",
    
    //Javascript Files
    "js/looping.js",
    "js/random.js",
    "js/recursion.js",

    //Videos
    "videos/Agent_Cobra_Original_Sin_Trailer.mp4",
    "videos/BLOOD_OF_ANGELS.mp4",
    "videos/Agent_Cobra_Original_Sin_Trailer.webm",
    "videos/BLOOD_OF_ANGELS.webm"
]
  

// Function to open links

function openRandomLink() {
    let number = getRandomNum(0, links.length);
    let link_stub = links[number];
    return open(main_page+link_stub,target = "_blank");
}

// Testing
console.log(openRandomLink());


