
// This is the Javascript code to randomly choose a page file and
// go to that page, as seen on the home page. 

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
    "",
]
  





