
$(document).ready(function () {
//focus input field
    $('#f1').focus(function () {
        $(this).css('border', '5px solid red');
    });

    //todolist::
    //style li list
    $('#list').css('border', '10px dotted yellow');
    $('#list').css('background-color', 'black');
    $('#list').css('color', 'yellow');
    $('#list').css('width', 'auto');
    $('#list').css('height', 'auto');

       //style list1:
       $('#list1').css('border', '10px dotted yellow');
       $('#list1').css('background-color', 'pink');
       $('#list1').css('color', 'yellow');
       $('#list1').css('width', 'auto');
       $('#list1').css('height', 'auto');
       //style ul li:
    // //    $('#list ,li').css('height', 'auto');
    //    $('#list ,li').css('background-color', 'yellow');
    //    $('#list ,li').css('color', 'black');
    //    $('#listl ,i').css('border-radius', '10px');
}); 

// show value in lists that we add from list: in last
$(document).ready(function() {

    $('#f1').change(function () {
        let v = $('#f1').val();
        $('#list').append(`<li>${v}</li>`);
    });

    // line through code:

    $('#list').on('click', 'li', function () {

        $(this).css('text-decoration', 'line-through');

        $(this).toggleClass('completed');
        
            // show into another list deleted item:
            let r = $('#list li.completed').text();
            $(this).show();
            $('#list1').append(`<li>${r}</li>`);
    
        // delete selected item:
        $('#del').click(function () {

            $('#list li.completed').remove();

        });
    });
});




// // show value in lists that we add from list: in start
// $(document).ready(function(){
//     $('button').dblclick(function(){
//         let v = $('#f1').val();
//         $('#list').prepend(`<li>${v}</li>`);
//     });
// });

