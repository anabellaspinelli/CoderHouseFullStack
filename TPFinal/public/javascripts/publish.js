$(document).ready(function() {
    var category = $('#category');
    var title = $('#title');
    var description = $('#description');
    var price = $('#price');
    var currency = $('#currency');
    /*MISSING IMAGES*/
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var province = $('#province');
    var city = $('#city');

    var validateOptions;

    (function fetchValidationRules() {
        $.ajax({
            type: 'GET',
            url: '/api/items/validations',
            success: function(data) {
                validateOptions = JSON.parse(data);
                console.log(validateOptions);
            }
        });
    })();

    $('#publish').validate(validateOptions);

    $('#publish').on('submit', function(e) {
        var item;

        e.preventDefault();
        item = extractItemFromForm();

        $.ajax({
            type: 'POST',
            url: '/api/items',
            data: JSON.stringify(item),
            success: function() {
                console.log('POST success!')
            },
            dataType: 'json',
            contentType: 'application/json',
        });
    });    

    function extractItemFromForm() {
        return {
            category: category.val(),
            title: title.val(),
            description: description.val(),
            price: price.val(),
            currency: currency.val(),
            seller: {            
                name: name.val(),
                email: email.val(),
                phone: phone.val(),
                province: province.val(),
                city: city.val()
            }
        }
    }
});
