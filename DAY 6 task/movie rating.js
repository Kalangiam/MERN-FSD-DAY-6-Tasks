class Movie {
    constructor(title, studio,rating) {
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
}

function PG(movies) {

    const pgMovies = movies.filter(movie => movie.rating === "PG");

    return pgMovies;
}


const movies = [
    new Movie("Casino Royale","Eon production", "PG"),
    new Movie("Titaic","Cammeron", "R"),
    new Movie("Inception","Nolan", "PG"),
    
];

const pgMovies = PG(movies);
console.log(pgMovies);


