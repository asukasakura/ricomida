$(document).ready(function(){
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
  });
  $("h6").dblclick(function(){
    $(this).css({
      "color": "red"
    });
  });
  $(".card-title").click(function(){
    $(this).next().toggle(200);
    $(this).parents(".card").find("img").toggle(200);
  })
});


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
});