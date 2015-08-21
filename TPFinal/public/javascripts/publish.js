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

    var inlineErrorMessages = {
        category: {
            required: 'Elegí una categoría.',
        },
        title: {
            required: 'Ingresá un título',
            rangelength: 'El título debe tener entre 10 y 100 caracteres.'
        },
        description: {
            required: 'Ingresá una descripción',
            rangelength: 'La descripción debe tener entre 30 y 300 caracteres.'
        },
        price: {
            required: 'Ingresá un precio.',
            number: 'El precio debe ser numéric.o',
            rangelength: 'El precio debe tener entre 1 y 7 cifras.'

        },
        name: {
            required: 'Ingresá tu nombre.',
            rangelength: 'El nombre debe tener entre 3 y 30 caracteres.'
        },
        email: {
            required: 'Ingresá tu email',
            email: 'Ingresá un email válido',
            maxlength: 'El email no puede tener más de 50 caracteres.'
        },
        phone: {
            number: 'Ingresá sólo valores numéricos.',
            minlength: 'El teléfono debe tener 7 dígitos como mínimo.'
        },
        province: {
            required: 'Ingresá una provincia.'
        },
        city: {
            required: 'Ingresá una ciudad'
        }
    }

    $('#publish').validate({
        rules: validationRules,
        messages: inlineErrorMessages,
        invalidHandler: function(event, validator) {
            console.log('invalid form');
            event.preventDefault();
        }
    });

    $('#publish').on('submit', function(event) {
        var item;

        event.preventDefault();
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