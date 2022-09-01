// $(selector).acción()

// $("h1").hide();

// $(document).ready(() => {}); //Documento ya esta cargado

//forma simplificda de lo anterior
$(() => {
  // Selectores:
  // id="el-1" => "#el-1"
  // class="el-1" => ".el-1"
  // $("#el-1").hide();

  $(".hide-btn").click(() => {
    console.log("Ocultando...");
    // $("h1").hide();
    $("h1").fadeOut();
  });

  $(".show-btn").click(() => {
    // $("h1").show();
    $("h1").fadeIn();
  });

  $("#amarillo").dblclick(() => {
    $("h1").css({ color: "yellow" });
  });

  $("#azul").click(() => {
    $("h1").css({ color: "blue" });
  });

  $("#rojo").click(() => {
    $("h1").css({ color: "red" });
  });

  $(".new-element").click(() => {
    // $("ul").append("<li>New Element</li>");
    $("ul").prepend("<li>New Element</li>");
  });

  $("li").mouseenter((elem) => {
    console.log("Han entrado el raton");
    elem.target.style.color = "purple";
  });

  $("li").mouseleave((elem) => {
    elem.target.style.color = "black";
  });
});
