let pizza = ['Masa','Salsa','Huevo','jamon','queso','oregano','albahaca','aceituna','cebolla','rucula'];
let pares = [];
let impares=[];

function ingredientesPizza (pizza){
  for(var i=0 ; i<pizza.length; i++){
    
    if( i /2  === 0 ){
      // console.log(pizza[i])
      pares.push(pizza[i]);
    }
    else
    {
   
       impares.push(pizza[i]);
    }
  }
  console.log(`Los ingredientes que tienen la cantidad de letras pares son: ${pares}`);
  console.log(`Los ingredientes que tienen la cantidad de letras inpares son: ${impares}`);
  
}
ingredientesPizza(pizza);