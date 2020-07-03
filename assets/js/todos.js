// setTimeout(function () 
// { 
//     location.reload(); });

// $("body").on("mouseleave",function()
// {
//     location.reload();
// });

///////////
//check off specific todos by clicking`
$("ul").on("click","li",function()
{
    $(this).toggleClass("completed");
});

//undo button
let isUndoClicked=false; //global var
$("ul").on("click", ".undo", function (event) 
{
    isUndoClicked=true;
    $(this).parent().children().fadeToggle(300);

    event.stopPropagation();
});

//click X to delete a todo
$("ul").on("click",".delete",function(event)
{
    isUndoClicked=false;
    // console.log(isUndoClicked);
    $(this).parent().children().fadeToggle(300);

    //if element already there fadein doesn't work
    $(this).parent().children().first().attr("style", "display:inline-block");
    //if on the above line i write "display:inline" then animation don't work

    $(this).parent().children().last().attr("style","display:none");
    $(this).parent().children().last().fadeIn(2500, function ()
    {
        // console.log(isUndoClicked);
        if (!isUndoClicked) 
        {
            $(this).parent().fadeOut(300,function()
            {
                $(this).remove();
            });
            // 
        }
    }
    );
    

    event.stopPropagation();
});

//check whether undo clicked or not


//adding a new todo
$("input[type='text']").on("keypress",function(event)
{
    // console.log(typeof(event.which));
    if(event.which === 13)
    {
        //enter pressed
        //grabbing new todo text from input 
        let todo=$(this).val();
        // for(let i=0;i<todo.length;i+=25)
        // {
        //     todo=todo.slice(0,i)+"\n"+todo.slice(i);
            
        // }
        $(this).val("");
        //create a new li and add it to ul
        $("ul").prepend("<li> <i class='fa fa-undo undo' aria-hidden='true'></i>  <span class='delete'> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>  <span class='todoText'>" + todo + "</span> <span class='.useless'></span> </li>");
        // $("ul").children().first().css("height","100px");
    }
});

//+ icon
$(".fa-plus").on("click",function()
{
    console.log("+clicked");
    $("input[type='text']").fadeToggle(500);
});

//todo list apears after delay

setTimeout(function()
{
    $("#container").fadeIn(500);
}
, 1000);



//add a new todo
// $(".newList").on("click",function()
// {
//     $("body").prepend(
//         "<div id=\"container\">
//         <h1> to-do list < i class= \"fa fa-plus\" aria-hidden=\"true\" ></i> </h1>
//             <input type=\"text\" placeholder=\"Add New Todo\" maxlength=\"28\">
//                 <ul>
//                     <li> <i class=\"fa fa-undo undo\" aria-hidden=\"true\"></i> <span class=\"delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> <span class=\"todoText\">Go to Potions Class</span> <span class=\".useless\"></span> </li>
//                     <li> <i class=\"fa fa-undo undo\" aria-hidden=\"true\"></i> <span class=\"delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> <span class=\"todoText\">Buy New Robes</span> <span class=\".useless\"></span> </li>
//                     <li> <i class=\"fa fa-undo undo\" aria-hidden=\"true\"></i> <span class=\"delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> <span class=\"todoText\">Visit Hagrid</span> <span class=\".useless\"></span> </li>
//                 </ul>

//         </div>"
//     )
// });