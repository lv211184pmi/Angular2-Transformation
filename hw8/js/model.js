'use strict';
(function(){
    
    let model = function() {

        let filmURL = "http://www.omdbapi.com/?page=1&s=",
            filmName = "Matrix";
        
        function getFilms() {
            return $.get( filmURL + filmName, function( films ) {
                console.log("Initial data is loaded");
            })            
        }
               
        function updateFilms(searchFilm) {
            filmName = searchFilm;
            return getFilms(searchFilm);            
        }
        
        return {
            getFilms : getFilms,
            updateFilms: updateFilms
        }
    }
    window.app = window.app || {};
    window.app.model = model();    
}())
