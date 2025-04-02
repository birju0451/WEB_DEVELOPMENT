$(document).ready(function () {
  console.log("we are in New file");

  // Your jQuery code here
  console.log("We are using jQuery");

  // jQuery Syntax looks like this
  // $('selector').action();

  // clicks on all the p elements.
  // $('p').click(); // click on p

  //   // Click event
  //   $("p").click(function () {
  //     console.log("you clicked on p", this);
  //     // $(this).hide();
  //     // $('#id').hide();
  //     // $('.class').hide();
  //   });

  /*EVENTS 

  // Click event
  $("p").click(function () {
    console.log("you clicked on p", this);
    // $(this).hide();
    // $('#id').hide();
    // $('.class').hide();
  });

  // Double click event
  $("p").dblclick(function () {
    console.log("you double clicked on p", this);
  });

  // Mouse enter event
  $("p").mouseenter(function () {
    console.log("you enter : ", this);
  });

  // Mouse leave event
  $("p").mouseleave(function () {
    console.log("you leave:", this);
  });

  // Mouse up event
  $("p").mouseup(function () {
    console.log("you click up ", this);
  });

  //   // Hover event
  //   $("p").hover(function () {
  //     console.log("You hovered on", this);
  //   });

  $("p").hover(
    function () {
      console.log("You hovered on", this);
      //    $(this).hide();  // Hides only the hovered paragraph
      // $('#id').hide(); // Hides the element with ID "id"
      // $('.class').hide(); // Hides elements with class "class"
    },
    function () {
      console.log("Thank you for comming ");
    }
  );
  */

  $("p").on({
    click: function () {
      console.log("Thank you for clicking", this);
    },

    mouseleave: function () {
      console.log("Mouse leave");
    },

    mouseup: function () {
      console.log("Mouse up :");
    },
  });

$("#wikipidia").hide(1000, function () {
  console.log("Hidden successfully.");
});

$("#wikipidia").show(1000, function () {
  console.log("Shown successfully.");
});


  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector - This is an example of element selector which clicks on all p
  //$('p').click();

  //2.Id selector -This is an Example of id selector
  //    $("#second").click();

  //3.Class selector -  this is an example of class selector
  //$('.odd')

  //other selectors
  //   $("*").click(); // clicks on all the elements
  //   //   $('p.odd').click()
  //   $("p:first").click();
});
