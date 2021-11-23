function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(function () {
  const script = document.createElement("script");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  script.type = "text/javascript";
  script.addEventListener("load", () => {
    $(function () {
      // FNAF 1 //
      $("#fnaf").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/595580562/embed/" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
      // FNAF 2 //
      $("#fnaf2").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/457521306/embed" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
      $("#fnaf3").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/175203935/embed" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
      $("#fnaf4").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/439961769/embed/" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
      $("#ucn").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/349060167/embed/" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
      $("#ucnsl").click(function () {
        if (!$("#iframe").length) {
          $("#title").remove();

          $(".card").remove();

          $("#iframeHolder").html(
            '<iframe id="iframe" src="https://scratch.mit.edu/projects/561132215/embed/" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0"></iframe>'
          );
        }
      });
    });
  });
  document.head.appendChild(script);
})();
