
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


// Binding the home page link to a variable for ease of randomization

const main_page = "https://tspur1066.github.io/personal-thomas-spurlock/"


// Creating an array of links for each page (and some other websites, too)

const links_1 = [
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

const links_2 = [
    "https://www.google.com/search?q=why+doesn%27t+my+javascript+code+work&sca_esv=586011724&ei=_z1mZdPSIdC5qtsPxsGEYA&ved=0ahUKEwiTzpK8teeCAxXQnGoFHcYgAQwQ4dUDCBA&uact=5&oq=why+doesn%27t+my+javascript+code+work&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3doeSBkb2Vzbid0IG15IGphdmFzY3JpcHQgY29kZSB3b3JrMggQIRigARjDBEjGNFCyD1iGL3ABeAGQAQCYAXugAZAGqgEDNy4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAAGIAEGA3CAgYQABgHGB7CAgYQABgeGA3CAgsQABiABBiKBRiGA8ICBRAAGIAEwgIKECEYoAEYwwQYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp",
    "https://usagif.com/gif/dancing-cat-33/",
    "https://www.youtube.com/watch?v=8PVal8Fy7CM",
    "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ffor-newbies-and-vets-alike-have-a-laugh-v0-pxipbcemwxn81.jpg%3Fauto%3Dwebp%26s%3Deef785be2014ff025d9faffcced7a08d9dcfd45b]"
]

// Function to open links

function openRandomLink() {
    if (getRandomNum(0,1) = 0) {
        let number = getRandomNum(0, links_1.length);
        let link_stub_1 = links_1[number];
        return open(main_page+link_stub_1,target = "_blank");
    } else {
    let number = getRandomNum(0, links_2.length);
    let link_stub_2 = links_2[number];
    return open(main_page+link_stub_2,target = "_blank");
    }
}



