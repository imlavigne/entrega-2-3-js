//agarramos el id que ingresan en el input

const idinput=document.getElementById('theID');
const pizzacontainer=document.getElementById('pizzacontainer');
// console.log('idinput');

let pizzaLocalstorage=JSON.parse(localStorage.getItem('pizzaLocalstorage')) || [];
const Pizzas=[
    {id:1,
     nombre: `Napolitana`,
     ingredientes:[`Salsa`,`Muzzarela`,`Tomate`],
     precio:1000, 
     img:"imagenes/napolitana.jfif",
        },
    { id:2,
     nombre: `Muzzarela`,
     ingredientes:[`Salsa`,`Muzzarela`,`Aceitunas`],
     precio:900,
     img:'imagenes/muzza.jfif',
    },
    { id:3,
      nombre: `Jamon`,
      ingredientes:[`Salsa`,`Muzzarela`,`Jamon`],
      precio:1200,
      img:'imagenes/jamon.jfif',
       },       
    {id:4,
     nombre: `Calabresa`,
     ingredientes:[`Salsa`,`Muzzarela`,`Salame`],
     precio:1250,
     img:'imagenes/calabresa.jfif',
     },
    {id:5,
     nombre: `Margarita`,
     ingredientes:[`Salsa`,`Muzzarela`,`Albaca`],
     precio:130,
     img:'imagenes/margarita.jfif',
     },    
    {id:6,
     nombre: `fugaza`,
     ingredientes:[`Cebolla`,`Muzzarela`,`Aceitunas`],
     precio:500,
     img:'imagenes/fugazza.jfif',
     },    
    ];

    //buscamos la pizza que tiene ese id

    const buscarID = (a) => {
       const lapizza= Pizzas.find(pizza=>pizza.id==a);
        //  console.log(lapizza);
         if (lapizza==null) return 'error';
         else return lapizza;
        // return lapizza;
    }

    //devolvemos los mensajes  en el html

    const mensajes=(a) => {
        const  pizza=buscarID(a);
        

        //const nombrePizza =document.getElementById('h2pizza');
        //const precioPizza =document.getElementById('h4pizza');
        if (pizza=='error'){
          //  nombrePizza.textContent='no se encontrearon pizzas con ese ID';
           // precioPizza.textContent='';
           // pizzacontainer.textContent=´<h4> NO SE ENCONTRO PIZZA CON ESE ID</h4>´;
            pizzacontainer.innerHTML=
        `<h2>no hay pizza con ese id</h2>`
        }
        else{
            // console.log('aca estoy');
       // nombrePizza.textContent=`la pizza es de ${pizza.nombre} ${pizza.img}`;
       //precioPizza.textContent=`y sale $ ${pizza.precio}`;

       
       pizzacontainer.innerHTML=
       `<div class="pizzas">
       
       <h2>${pizza.nombre}</h2>
       <img src="${pizza.img}"  />
       <h4>el precio es $${pizza.precio}</h4>
       <h4>el id es ${pizza.id}</h4>
        </div>
      `  
      return pizza;
    }
    }

   
    //guardamos en el localstorage
    const saveLocalStorage = pizzaLocalstorage => {
        localStorage.setItem("pizzaLocalstorage", JSON.stringify(pizzaLocalstorage));
      }


    pizzas.addEventListener('submit', e => {
        // Prevenimos por defecto el comportamiento al enviar el form
        e.preventDefault();
        mensajes(idinput.value);
        pizzaLocalstorage = [idinput.value];
        idinput.value='';
      
        saveLocalStorage(pizzaLocalstorage);
    });
mensajes(pizzaLocalstorage);
