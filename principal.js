// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade


document.querySelector("#rolar").onclick = function () {
    var soma=0;
    let quantidades = document.getElementsByTagName("input");
    resultado.value="";
    let d4=quantidades.qtdeD4.value;
    soma+=valores(4,d4);
    let d6=quantidades.qtdeD6.value;
    soma+=valores(6,d6);
    let d8=quantidades.qtdeD8.value;
    soma+=valores(8,d8);
    let d10=quantidades.qtdeD10.value;
    soma+=valores(10,d10);
    let d12=quantidades.qtdeD12.value;
    soma+=valores(12,d12);
    let d20=quantidades.qtdeD20.value;
    soma+=valores(20,d20);
    let aux=resultado.value;
    resultado.innerHTML=aux.substring(0,(aux.length - 2));
    resultado.innerHTML+=" = "+soma;
    if(!soma==0)
        resultado.parentElement.classList="";
   }
function valores(maximo,quantidade) {
    let resultado = document.getElementById("resultado");
    let numero=0,soma=0;
    for(let i=0;i<quantidade;i++){
        numero=Math.ceil(Math.random() * maximo);
        soma+=numero;
        resultado.value+=numero+" + ";
    }
    return soma;
}