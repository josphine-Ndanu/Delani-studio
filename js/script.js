$(".design").click(function () {
    $(".design-img").toggle();
    $(".design-desc").toggle();
});

$(".dev").click(function () {
    $(".dev-img").toggle();
    $(".dev-desc").toggle();
});

$(".productMg").click(function () {
    $(".produc-img").toggle();
    $(".produc-desc ").toggle();
});

//  $(".prjct2","".prjct3",.prjct1,.prjct4,.prjct5,.prjct6,.prjct7,.prjct8").click(function () {
//     $(".overlay").show();
// });
// $("#
// prjct1").mouseenter(function () {
//     $(".overlay").show();
// });

//  var projects =["#prjct1","#prjct2","#prjct3","#prjct4","#prjct5","#prjct6","#prjct7","#prjct8"]
//  projects.forEach(element => {
//      $("project").mouseenter(function () {
//         $(".overlay").show();
//      })
//  });

$("#prjct1").mouseover(function () {

    $(" .pone").show();
}).mouseout(function () {
    $(" .pone").hide();
})

$("#prjct2").mouseover(function () {

    $(" .ptwo").show();
}).mouseout(function () {
    $(" .ptwo").hide();
})

$("#prjct3").mouseover(function () {

    $(" .pthree").show();
}).mouseout(function () {
    $(" .pthree").hide();
})

$("#prjct4").mouseover(function () {

    $(" .pfour").show();
}).mouseout(function () {
    $(" .pfour").hide();
})

$("#prjct5").mouseover(function () {

    $(" .pfive").show();
}).mouseout(function () {
    $(" .pfive").hide();
})

$("#prjct6").mouseover(function () {

    $(" .psix").show();
}).mouseout(function () {
    $(" .psix").hide();
})
$("#prjct7").mouseover(function () {

    $(" .pseven").show();
}).mouseout(function () {
    $(" .pseven").hide();
})
$("#prjct8").mouseover(function () {

    $(" .peight").show();
}).mouseout(function () {
    $(" .peight").hide();
})

// $(document).ready(function(){
//     $("form#sub").submit(function(event){
//        event.preventDefault();
//       var name = $("input#mce-NAME").val();
//       var email = $("input#mce-EMAIL").val();
//       var message = $("textarea#msg").val();
//       if ($("input#mce-NAME").val() && $("input#EMAIL").val()){
//         alert (name + ",Delani Studio  has recieve you message.We will get back to you soon.Keep it Delani studio always. Thanks for your feedback.:)");
//       }
//       else {
//         alert("Please enter a valid email and name!");
//       }

//     });

//   });

// (function ($) {
//                 window.fnames = new Array();
//                 window.ftypes = new Array();
//                 fnames[1] = 'NAME';
//                 ftypes[1] = 'text';
//                 fnames[0] = 'EMAIL';
//                 ftypes[0] = 'email';
//                 fnames[2] = 'MMERGE2';
//                 ftypes[2] = 'text';
//             }(jQuery));
//             var $mcj = jQuery.noConflict(true);


$(".submitInfo").click(function (event) {

    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#msg").val();
    if ($("#name").val("") && $("#msg").val("")) {
        alert(name + "Delani studio, We appreciate your feedback.:)");
    } else {
        alert("Please fill all fields!");
    }

});