$(document).ready(function() {

    let index = 0;


    $('.mainNumber').html(index)
    $('.incrementValue').attr('value',1)


    $('.addButton').on("click",(e)=> {
        e.preventDefault();

        incrementValue = parseInt($('.incrementValue')[0].form[1].value)
        index += incrementValue;

        $('.mainNumber').html(index)

        if (index >= 0){
            $(".mainNumber").removeAttr('id','negativeNumber')
        }



    })

    $('.subtractButton').on("click",(e)=> {

        e.preventDefault();
        incrementValue = parseInt($('.incrementValue')[0].form[1].value)
        index -= incrementValue;

        $('.mainNumber').html(index)

        if (index < 0){
            $(".mainNumber").attr('id','negativeNumber')
        }



    })


})