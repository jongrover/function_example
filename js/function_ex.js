$(function(){

  // Don't
  // Repeat
  // Yourself

  //declare a function
  function doMath(x, y, z) {
    return x + y + z;
  }

  var doMath2 = function () {
    return x - y - z;
  };

  $('body').append(doMath(5, 4, 1)); //call a function
  $('body').append(doMath(10, 20, 1));


  var fav_cow = "Bessy";

  function milkTheCow() {
    var fav_cow = "Ruby";
    //console.log(fav_cow);
    return fav_cow;
  }

  //milkTheCow();

  var global_feeling = milkTheCow();

  console.log(global_feeling);

  var jon_list = ['Walk the Dog', 'Take Out The Trash', "Steal a Car"];
  var jane_list = ['Feed The Tiger', 'Bandage Hand'];

  function printTasks(tasks, title) {
    // Insert the Title here as h1
    $('body').append('<h1>'+title+'</h1>');
    // iterate over each task and display the task. 
    for (i=0; i < tasks.length; i++){
      $('body').append('<p>'+tasks[i]+'</p>');
    }
  }

  printTasks(jon_list, "Jon List");
  printTasks(jane_list, "Jane List");

  $('ul#users li').each(function (index, li) {
    var time = $(li).data('online-time');
    if (time > 1) {
      $(li).addClass('addict');
    }
  });

  // user clicks submit
  $('#submit').click(function () {

      // get the value from #cow_name
      var cow_name = $('#cow_name').val(); // val with empty argument will get value

      // set the #present input with that cow name.
      //$('#present').val(cow_name); // val with 1 argument will set value.

      //write the name as text into a paragraph
      $('#present').html('<strong>'+cow_name+'</strong>');
  });

});