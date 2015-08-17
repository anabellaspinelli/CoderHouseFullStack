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

    var validationRules = {
        category: {
            required: true,
        },
        title: {
            required: true,
            rangelength: [10, 100]
        },
        description: {
            required: true,
            rangelength: [30, 300]
        },
        price: {
            required: true,
            number: true,
            rangelength: [1, 7],

        },
        name: {
            required: true,
            rangelength: [3, 30]
        },
        email: {
            required: true,
            maxlength: [50]
        },
        phone: {
            number: true
        },
        province: {
            required: true
        },
        city: {
            required: true
        }
    };

    $('#publish').validate({
        rules: validationRules
    });

    $('#publish').on('submit', function(e) {
        var item;

        e.preventDefault();
        item = extractItemFromForm();

        $.ajax({
            type: 'POST',
            url: '/api/items',
            data: JSON.stringify(item),
            success: function() {
                console.log('POST success!');
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