$(document).ready(function() {
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
        getFormControls();
        item = extractItemFromForm();

        $.ajax({
            type: 'POST',
            url: '/api/items',
            data: JSON.stringify(item),
            success: function(data) {
                console.log(data);
                if (data.error) {
                    showServerValidations(data);
                } else {
                    console.log('POST success!');
                    window.location.href = '/items/publish/success/id-' + data.result._id
                }
            },
            dataType: 'json',
            contentType: 'application/json',
        });
    });

    function getFormControls() {
        var $category,
            $title,
            $description,
            $price,
            $currency,
            $name,
            $email,
            $phone,
            $province,
            $city;

        if (!getFormControls.$category) {
            $category = $('#category');
        }

        if (!getFormControls.$title) {
            $title = $('#title');
        }

        if (!getFormControls.$description) {
            $description = $('#description');
        }

        if (!getFormControls.$price) {
            $price = $('#price');
        }

        if (!getFormControls.$currency) {
            $currency = $('#currency');
        }

        if (!getFormControls.$name) {
            $name = $('#name');
        }

        if (!getFormControls.$email) {
            $email = $('#email');
        }

        if (!getFormControls.$phone) {
            $phone = $('#phone');
        }

        if (!getFormControls.$province) {
            $province = $('#province');
        }

        if (!getFormControls.$city) {
            $city = $('#city');
        }

        getFormControls.$category = $category;
        getFormControls.$title = $title;
        getFormControls.$description = $description;
        getFormControls.$price = $price;
        getFormControls.$currency = $currency;
        getFormControls.$name = $name;
        getFormControls.$email = $email;
        getFormControls.$phone = $phone;
        getFormControls.$province = $province;
        getFormControls.$city = $city;
    }

    function extractItemFromForm() {
        return {
            category: getFormControls.$category.val(),
            title: getFormControls.$title.val(),
            description: getFormControls.$description.val(),
            price: Number(getFormControls.$price.val()),
            currency: getFormControls.$currency.val(),
            seller: {
                name: getFormControls.$name.val(),
                email: getFormControls.$email.val(),
                phone: getFormControls.$phone.val(),
                province: getFormControls.$province.val(),
                city: getFormControls.$city.val()
            }
        }
    }

    function showServerValidations(data) {
        $('#errors > ul').empty();
        data.error.forEach(function(error) {
            $('#errors > ul').append($('<li>', {
                text: error.message
            }));
        });
    }
});