$( "#ButtonPost" ).on( "click", function(e) {
    e.preventDefault();
    var toDo = $("#todoText").val();
    console.log(toDo);
    $("#todoList").append('<input type = "checkbox" name="todo" /> ' + toDo +'<br>');
    $("#todoText").val("");
});


$( "#ButtonClear" ).on( "click", function(e) {
    e.preventDefault();
    $( "[name='todo']" ).prop("checked", false);
});


$( "#ButtonMark" ).on( "click", function(e) {
    e.preventDefault();
    $( "[name='todo']" ).prop("checked", true);
});

$( "#ButtonDelete" ).on( "click", function(e) {
    e.preventDefault();
    $("#todoList").html("");
});
