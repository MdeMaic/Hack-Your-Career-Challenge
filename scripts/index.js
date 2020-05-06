var movies = [
  {
    title: "Moon",
    year: 2009,
    director: "Duncan Jones",
    duration: "97",
    rate: 7.9,
    picture: "https://i.pinimg.com/564x/3f/ac/29/3fac29111e45a9426d96a159ac29436c.jpg",
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "149",
    rate: 8.3,
    picture: "https://i.pinimg.com/564x/84/3e/85/843e854ff99d107727a4dab92a2460aa.jpg"
  },
  {
    title: "Star Trek",
    year: 2009,
    director: "J.J. Abrams",
    duration: "127",
    rate: 7.9,
    picture: "https://i.pinimg.com/564x/c8/9f/19/c89f1998eb3bbf4047607e048951487c.jpg"
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    duration: "121",
    rate: 8.0,
    picture: "https://i.pinimg.com/564x/ac/0a/7f/ac0a7f7095ab102e14fd60b2b8ed6137.jpg"
  },
  {
    title: "The Right Stuff",
    year: 1983,
    director: "Philip Kaufman",
    duration: "193",
    rate: 7.8,
    picture: "https://i.pinimg.com/564x/a4/82/9e/a4829e7c5bb4c9058d39142d4e42fad1.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "169",
    rate: 8.6,
    picture: "https://i.pinimg.com/564x/ed/32/c2/ed32c2b6842593234e71dc91b6e9307d.jpg"
  },
  {
    title: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    duration: "147",
    rate: 8.1,
    picture: "https://i.pinimg.com/originals/f6/a4/2d/f6a42d692538a510c145191d5bd4a824.jpg"
  },
  {
    title: "Apollo 13",
    year: 1995, 
    director: "Ron Howard",
    duration: "140",
    rate: 7.6,
    picture: "https://i.pinimg.com/564x/90/0b/c8/900bc840a22f615fbf6c163095e046b5.jpg"
  },
  {
    title: "Alien",
    year: 1979, 
    director: "Ridley Scott",
    duration: "117",
    rate: 8.4,
    picture: "https://i.pinimg.com/564x/95/71/2e/95712e8351138c97374f84db96d32d68.jpg"
  },
  {
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    duration: "144",
    rate: 8.0,
    picture: "https://i.pinimg.com/564x/3a/ca/ae/3acaae0273060c77bf55fbc1c8e2f458.jpg"
  },
  {
    title: "Gravity",
    year: 2013,
    director: "Alfonso Cuarón",
    duration: "91",
    rate: 7.8,
    picture: "https://i.pinimg.com/564x/03/98/c5/0398c546349dce88b207a5313eb80919.jpg"
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "138",
    rate: 7.9,
    picture: "https://i.pinimg.com/564x/70/c5/2e/70c52e479a9cf8c8b4f8e4429550ae36.jpg"
  },
];

console.log("Hello World!");


/* Exercice 1
Let's print the movies with a rate of at least 8.0 and print the "title" and "rate" in the console.*/

function findBest(lst){
  var moreThan8 = [];
  for (var i = 0; i < lst.length; i++){
    if (lst[i].rate >= 8){
      moreThan8.push(lst[i]);
    }
  } 
  return moreThan8;
}

/* Exercice 2
Add the movies with a rate greater or equal than 8.0 in an array called "bestMovies" and print this array to the console.  */

var bestMovies = findBest(movies);
console.log(bestMovies);

/* Exercice 3
Print to the console the movies that are from Ridley Scott. */

function filterDirector(lst,dirName){
  var yourDirector = [];
  for (var i = 0; i < lst.length; i++){
    if (lst[i].director == dirName){
      yourDirector.push(lst[i]);
    }
  } 
  return yourDirector;
}

var director = "Ridley Scott";
var ridleyMovies = filterDirector(movies,director);
console.log(ridleyMovies);

/* Exercice 4
Based on the "duration" property (which is in minutes), can you print the shortest movie to the console? */

function haveNoTime(lst){
  var yourShortestMovie = {};
  var movieTime = 9999;

  for (var i = 0; i<lst.length; i++){
    if (Number(lst[i].duration) < movieTime){
      yourShortestMovie = lst[i];
      movieTime = Number(lst[i].duration);
    }
  } 
  return yourShortestMovie;
}

var shortestMovie = haveNoTime(movies);
console.log(shortestMovie);

/* Exercice 5
Sort the movies in descending order (from newest to oldest) by using the year. */

var sortedMovies = movies;

sortedMovies.sort(function(a,b){
  if (a.year != b.year){
    return a.year - b.year;
  }else{
    return a.title - b.title;
  }
})

console.log(sortedMovies);


//Display
function movieTemplate(lstMovies){
  return `<div class="container">
    <img src=${lstMovies.picture} class="image"></img>
    <div class="overlay">
    <h3 class="text title">${lstMovies.title}</h3>
    <p class=" text who-when"> by ${lstMovies.director} in ${lstMovies.year}</p>
    <p class="text rate">Rate ${lstMovies.rate}</p>
    <p class="text duration"> ${lstMovies.duration} min</p>
    </div>
    </div>
  `;
}

//top movies
document.getElementById("top-movies").innerHTML = `
${bestMovies.map(movieTemplate).join("")}`

//Ridley Scott movies
document.getElementById("ridley-movies").innerHTML = `
${ridleyMovies.map(movieTemplate).join("")}`

//Shortest movie
document.getElementById("shortest-movie").innerHTML = `
${movieTemplate(shortestMovie)}`

//Sorted movies
document.getElementById("sorted-movies").innerHTML = `
${sortedMovies.map(movieTemplate).join("")}`


