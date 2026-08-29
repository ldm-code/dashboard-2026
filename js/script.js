$(document).ready(function () {

    // Botão "Ver mais informações"
    $("#btnMaisInfo").click(function () {

        $("#maisInfo").slideToggle(500);

    });


    // Botão "Mostrar projetos"
    $("#btnProjetos").click(function () {

        $("#listaProjetos").slideToggle(500);

    });
    $("#btnEstudo").click(function(){
           $(".cards").slideToggle(500);
    });
    $("#btnProjetosPub").click(function(){
          $("#projetosPublicados").slideToggle(500);
    });


    // Evento de passar o mouse pelos cards
    $(".card").hover(

        function () {
            $(this).css("background", "#ddd");
        },

        function () {
            $(this).css("background", "#eee");
        }

    );


});

