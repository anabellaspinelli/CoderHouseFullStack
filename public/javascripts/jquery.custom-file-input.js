(function createImageFileInput($) {
    var $pluginContainer = $('<div></div>', {
        id: 'image-input-container-' + Date.now(),
        style: 'position: absolute; left: -99999px; top: -99999px;'
    });

    $('body').append($pluginContainer);

    $.fn.customFileInput = function(options) {
        this.each(function(index, elem) {
            var $elem = $(elem);

            var fileInputId = 'image-input-' + Date.now();
            var $fileInput = $('<input>', {
                id: fileInputId,
                type: 'file',
                accept: 'image/*'
            });

            $elem.data('fileInputId', fileInputId);

            $pluginContainer.append($fileInput);

            $elem.on('click', function() {
                var $this = $(this);
                $('#' + $this.data('fileInputId')).trigger('click');
            });

            $fileInput.on('change', function(event) {
                options.onFilePicked($elem, event.target.files[0]);
            });
        });
    };
})(jQuery);