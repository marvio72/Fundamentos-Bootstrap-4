$(function(){

/*==============================================================================================
FUNCIONES PARA EL MENU PRINCIPAL
==============================================================================================*/

  /*Inserta y quita la clase ".icono-cerrar" al boton del manu*/ 
  $("#btnMenu").click(function(){
    $(".icono").toggleClass("icono-cerrar");
  });

  /*Al hacer click en un enlace del menú principal*/ 
  $("#menu-navegacion .navbar-nav a").click(function(){

    /* 1) Quita la clase ".icono-cerrar" */
    $(".icono").removeClass("icono-cerrar");

    /* 2) Contraer el menú */
    // $("#navbarNav").removeClass("show");
    $("#navbarNav").collapse("hide");
  });
});