$(document).ready(function() {
    $('.search').on('submit', function(e) {
        var searchTerm;

        e.preventDefault();

        searchTerm = $('.txt-search').val().split(' ').join('+');
        $.ajax({
            type: 'GET',
            url: '/items/search/' + searchTerm,
            dataType: 'json',
            contentType: 'application/json',
        })
    });
});