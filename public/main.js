//Metodo para hacer la creacion de la nueva tarea asinconamente
//la gema make-todo no facilita la 
// $(".new-task").click(function (event) {
  
//     var values = {};

//     $.each($(this).closest("form").serializeArray(), function (i, field) {
//         values[field.name] = field.value;
//     });

//     //Value Retrieval Function
//     var getValue = function (valueName) {
//         return values[valueName];
//     };

//     //Retrieve the Values
//     var url = getValue("task");
//     console.log(url)

//     $.ajax({
//             url: `/tarea/${url}`,
//             type: 'POST',
//     });

// console.log(url);
// });



$(".update_form").click(function (event) {

    event.preventDefault();

    
    $(this).closest('.perro').fadeOut();
    
    var values = {};

    $.each($(this).closest("form").serializeArray(), function (i, field) {
        values[field.name] = field.value;
    });

    //Value Retrieval Function
    var getValue = function (valueName) {
        return values[valueName];
    };

    //Retrieve the Values
    var url = getValue("id");
    console.log(url)
    $.ajax({
            url: `/tarea/${url}`,
            type: 'DELETE',
    });

console.log(url);
});


  $(".create_form").click(function (event) {

    event.preventDefault();

    $(this).closest('.perro').fadeOut(1000);;
    
    $(this).closest('.perro').appendTo('.done').fadeIn();

    $(this).closest('.perro').find('.create_form').hide();
    
    var values = {};

    $.each($(this).closest("form").serializeArray(), function (i, field) {
        values[field.name] = field.value;
    });

    //Value Retrieval Function
    var getValue = function (valueName) {
        return values[valueName];
    };

    //Retrieve the Values
    var url = getValue("id");
    console.log(url)

    $.ajax({
            url: `/done/${url}`,
            type: 'POST',
    });

console.log(url);
});

