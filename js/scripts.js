class Calculator{ 
    constructor(){
        this.expression = "";
    }

   AtribuirValor(value){
   this.expression+=value;
    this.AtualizarDisplay();
   }

   AtualizarDisplay(){
   document.querySelector("input").value =this.expression;
   }

   Limpar(){
    this.expression = "";
    this.AtualizarDisplay();
   }

   CalcularResultado(){
    let resultado = eval(this.expression)
    document.querySelector("input").value = resultado;
   }
}

const calculator = new Calculator;