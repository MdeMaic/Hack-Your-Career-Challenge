var movies = [
  {
    title: "Moon",
    year: 2009,
    director: "Duncan Jones",
    duration: "97",
    rate: 7.9,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "149",
    rate: 8.3,
  },
  {
    title: "Star Trek",
    year: 2009,
    director: "J.J. Abrams",
    duration: "127",
    rate: 7.9,
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    duration: "121",
    rate: 8.0,
  },
  {
    title: "The Right Stuff",
    year: 1983,
    director: "Philip Kaufman",
    duration: "193",
    rate: 7.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "169",
    rate: 8.6,
  },
  {
    title: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    duration: "147",
    rate: 8.1,
  },
  {
    title: "Apollo 13",
    year: 1995, 
    director: "Ron Howard",
    duration: "140",
    rate: 7.6,
  },
  {
    title: "Alien",
    year: 1979, 
    director: "Ridley Scott",
    duration: "117",
    rate: 8.4,
  },
  {
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    duration: "144",
    rate: 8.0,
  },
  {
    title: "Gravity",
    year: 2013,
    director: "Alfonso Cuarón",
    duration: "91",
    rate: 7.8,
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "138",
    rate: 7.9,
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

function movieTemplate(lstMovies){
  return `<div class="movie">
    <div class="first-div">
    <h2 class="title">${lstMovies.title}</h2>
    <p class="who-where"> by ${lstMovies.director} in ${lstMovies.year}</p>
    </div>
    <div class="second-div>
    <p class="rate">Rate ${lstMovies.rate}</p>
    <p class="duration"> ${lstMovies.duration} min</p>
    </div>
  </div>
  `;
}


document.getElementById("showmovies").innerHTML = `
${sortedMovies.map(movieTemplate).join("")}
`