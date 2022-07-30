$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#enviar").click(function () {
    alert("El correo fue enviado.......");
  });

  $(".title").dblclick(function () {
    $(this).css("color", "red");
  });

  $(".title-recipe").click(function () {
    $(".card-parrafo").toggle();
  });
});
