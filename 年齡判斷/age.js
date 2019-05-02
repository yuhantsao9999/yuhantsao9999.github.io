console.log('程式執行')

$('#Run').on('click', function() {
    console.log('已按到~~')
    var age = $('#InputAge').val()

    if (age >= 18) {
        $('#Output').val('已成年')
    } else {
        $('#Output').val('未成年')
    }
})