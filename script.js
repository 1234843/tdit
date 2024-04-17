$(".menu > ul > li").click(function (e) {
    // remove active from already active list   
    $(this).siblings().removeClass("active");
    //add active to clicked list
    $(this).toggleClass("active");
    // if has submenu open it
    $(this).find("ul").slideToggle();
});

// $(document).ready(function() {
//     // Load sidebar, header, and footer from template file
//     $('#sidebar').load('view-user-details.html .sidebar');
//     $('#nrimitr-logo-parent').load('view-user-details.html .nrimitr-logo-parent');
//     $('#footer-parent').load('view-user-details.html .footer-parent');
//   });
  