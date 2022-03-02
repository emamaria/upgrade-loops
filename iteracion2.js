

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]



alumns.forEach((alumn)=>{

let counter = 0;

let isApproved = false;

   if(alumn.T1){
     counter++
   }

   if(alumn.T2){
    counter++
   }

   if(alumn.T3){
    counter++
   }

   if(counter >= 2){
       isApproved = true;
      
   }

   if(isApproved){
    console.log(alumn.name + " is Approved");
   }else{

    console.log(alumn.name + " is not Approved");
   }

  
   
})

