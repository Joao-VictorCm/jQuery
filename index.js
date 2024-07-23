// Links uteis
// CDN = https://developers.google.com/speed/libraries?hl=pt-br#jquery
// https://jquery.com/



 $("h1").addClass("big-title class02")
 

// // verificando se o elemento tem a classe
// // caso sim ele retorna true

$("h1").hasClass("class02")


// // alterando textos

$("h1").text("Bye")


// //Adicionado HTML

$("button").html("<em>Hey</em>")

// //Alterando atributos

$("a").attr("href", "https://www.yahoo.com")




// //Add funções
// Eventos: https://developer.mozilla.org/en-US/docs/Web/Events

$("h1").click(function () {
    $("h1").css("color", "red")
})

$("button").click(function(){
    $("h1").css("color", "green")
})

$("input").keypress(function (event) {

    // var i = event.key
    $("h1").text(event.key)

})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
})
