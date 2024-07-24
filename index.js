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

// $("button").click(function(){
//     $("h1").css("color", "green")
// })

$("input").keypress(function (event) {

    // var i = event.key
    $("h1").text(event.key)

})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
}) 


// .before Add o novo elemento antes da tag selecionada "h1"
$("h1").before("<button>New button</button>")


// .after Add o novo elemento depois da tag selecionada "h1"
$("h1").after("<button>New button</button>")

// .prepend Add o novo elemento logo antes do conteudo do h1 e apos a tag selecionada "h1"
$("h1").prepend("<button>New button</button>")

// .append Add o novo elemento apos o conteudo h1 mais ainda dentro do elemento "h1"
$("h1").before("<button>New button</button>")

// para remover elementos 
// $("button").remove()




 

// consulta para mais animações 
// https://api.jquery.com/slideDown/
// https://www.w3schools.com/jquery/jquery_ref_effects.asp

// Para esconder e aparecer elementos

//  $("button").on("click", function(){
//     $("h1").toggle()
// })


// Outra opção porem altera a opacidade

// $("button").on("click", function(){
//     $("h1").fadeToggle()
// })


// Outra opção porem fica com animação de cortina subindo

// $("button").on("click", function(){
//     $("h1").slideToggle()
// })


// Outra opção que é mais refinada e altera o css

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5})
})