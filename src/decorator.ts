//decorator
function ExibirNome(target: any){
    console.log(target)
}


//Aqui normalmente da um erro porque o decorator é uma feature nova
//ir no tsconfig e habilitar o "experimentalDecorators" tirando as duas barras

//O decorator associou-se com a classe de baixo, igual uma Annotation
@ExibirNome
class Funcionario{}