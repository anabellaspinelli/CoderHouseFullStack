$(document).ready(function() {
    var validations = JSON.parse($('#validations').html());
    var images = {};

    $('.img-file').customFileInput({
        onFilePicked: function (element, file) {
            console.log(arguments);
            images[element.attr('id')] = file;
        }
    });

    $('#publish').validate({
        rules: validations.rules,
        messages: validations.messages,
        invalidHandler: function(event, validator) {
            console.log('invalid form');
            event.preventDefault();
        }
    });

    $('#publish').on('submit', function(event) {
        var formData = new FormData();
        event.preventDefault();
        getFormControls();
        formData.append('json', JSON.stringify(extractItemFromForm()));
        $.each(images, function(prop, value) {
            formData.append(prop, value);
        });


        $.ajax({
            type: 'POST',
            url: '/api/items',
            data: formData,
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
            contentType: false,
            processData: false
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
            getFormControls.$category = $category;
        }

        if (!getFormControls.$title) {
            $title = $('#title');
            getFormControls.$title = $title;
        }

        if (!getFormControls.$description) {
            $description = $('#description');
            getFormControls.$description = $description;
        }

        if (!getFormControls.$price) {
            $price = $('#price');
            getFormControls.$price = $price;
        }

        if (!getFormControls.$currency) {
            $currency = $('#currency');
            getFormControls.$currency = $currency;
        }

        if (!getFormControls.$name) {
            $name = $('#name');
            getFormControls.$name = $name;
        }

        if (!getFormControls.$email) {
            $email = $('#email');
            getFormControls.$email = $email;
        }

        if (!getFormControls.$phone) {
            $phone = $('#phone');
            getFormControls.$phone = $phone;
        }

        if (!getFormControls.$province) {
            $province = $('#province');
            getFormControls.$province = $province;
        }

        if (!getFormControls.$city) {
            $city = $('#city');
            getFormControls.$city = $city;
        }

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