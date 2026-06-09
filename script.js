// Gráfico de produção de trigo

const ctx = document.getElementById("grafico");

new Chart(ctx,{
type:"line",

data:{
labels:["2018","2019","2020","2021","2022","2023"],

datasets:[{
label:"Produção (milhões de toneladas)",
data:[5.4,5.2,6.3,7.7,10.5,11.0],

borderColor:"#D4A017",
backgroundColor:"rgba(212,160,23,.2)",
fill:true,
tension:0.4
}]
},

options:{
responsive:true,
plugins:{
legend:{
display:true
}
}
}
});


// Quiz

function corrigirQuiz(){

let pontos = 0;

document
.querySelectorAll("input[type='radio']:checked")
.forEach(item=>{
pontos += Number(item.value);
});

const resultado =
document.getElementById("resultado");

resultado.innerHTML =
`🎉 Você acertou ${pontos} de 3 questões!`;

}