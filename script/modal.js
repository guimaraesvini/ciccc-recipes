
$(".open").on("click", function() {
  $(".sign-overlay, .modal-content").addClass("active");
});

$(".close, .sign-overlay").on("click", function() {
  $(".sign-overlay, .modal-content").removeClass("active");
});

$(".modal-content").on("click", function(e) {
  e.stopPropagation()
});