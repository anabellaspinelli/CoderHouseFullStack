$(document).ready(function() {
    $('.search').on('submit', function(e) {
        var searchTerm;

        e.preventDefault();

        searchTerm = $('.txt-search').val().split(' ').join('+');

        window.location.href = 'http://localhost:3000/items/search/' + searchTerm;
    });
});