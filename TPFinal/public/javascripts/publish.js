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

    $('#publish').on('submit', function(e) {
        var item;

        e.preventDefault();
        item = extractItemFromForm();

        /*TO-DO VALIDATE DATA*/

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

/*    function validateData(data) {
        return (
            data.category !== '' &&
            data.title.length > 10 &&
            data.description > 30 &&
            (parseInt(data.price) !== NaN && data.price !== '0') &&
            data.currency !=== '' &&,
        )
    }*/
});
