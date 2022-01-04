export let movies = [
    {
    id: 0,
    name : "Avengers",
    score: 14
    },
    {
        id: 1,
        name : "Avatar",
        score: 18
        },
    {
        id: 2,
        name : "torr",
        score: 15
        },
    {
        id: 3,
            name : "Logan",
            score: 80
        }

] 
export const getMovies = () => {
    return movies;
};

export const getById = id => {
    const filteredMovies = movies.filter(person => id === person.id);
    return filteredMovies[0];
}
export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id!==id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }
    else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const ids = movies.map(movie => movie.id)
    const newMovie = {
        id : `${Math.max(...ids)+1}`,
        name,
        score,

    }
    movies.push(newMovie);
    return newMovie;
}