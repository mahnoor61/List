//focus input field
$(document).ready(function () {
    $('#f1').focus(function () {
        $(this).css('border', '5px solid red');
    });
});

//todolist::
//style li list
$(document).ready(function () {
    $('#list').css('border', '10px dotted red');
    $('#list').css('background-color', 'yellow');
    $('#list').css('width', 'auto');
    $('#list').css('height', 'auto');
});

// $(document).ready(function(){
//        //style list1:
//        $('#list').css('border', '10px dotted yellow');
//        $('#list').css('background-color', 'red');
//        $('#list').css('width', 'auto');
//        $('#list').css('height', 'auto');
// });

// show value in lists that we add from list: in last
$(document).ready(function () {
    $('#add').click(function () {
        let v = $('#f1').val();
        $('#list').append(`<li>${v}</li>`);
    });
});

// line through code:
$(document).ready(function () {
    $('#list').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');

        $(this).toggleClass('completed');
        //    let x =   $(this).text();
        //    console.log(x);

        // delete selected item:
        $('#del').click(function () {
            let r = $('#list li.completed').remove();
            // $(`#list li ${x}`).remove();

            // show into another list deleted item:
            $(this).show();
            $('#list1').append(`<li>${r}</li>`);
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

