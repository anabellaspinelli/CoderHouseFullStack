$(document).ready(function() {
    $('.search').on('submit', function(e) {
        var searchTerm;

        e.preventDefault();

        searchTerm = $('.txt-search').val().split(' ').join('+');

        window.location.href = '/items/search/' + searchTerm;
    });
});