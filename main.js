//agarramos el id que ingresan en el input

const idinput=document.getElementById('theID');
// console.log('idinput');


const Pizzas=[
    {id:1,
     nombre: `Napolitana`,
     ingredientes:[`Salsa`,`Muzzarela`,`Tomate`],
     precio:1000,
    },
    { id:2,
     nombre: `Muzzarela`,
     ingredientes:[`Salsa`,`Muzzarela`,`Aceitunas`],
     precio:900,
    },
    { id:3,
      nombre: `Jamon`,
      ingredientes:[`Salsa`,`Muzzarela`,`Jamon`],
      precio:1200,
       },       
    {id:4,
     nombre: `Calabresa`,
     ingredientes:[`Salsa`,`Muzzarela`,`Salame`],
     precio:1250,
     },
    {id:5,
     nombre: `Margarita`,
     ingredientes:[`Salsa`,`Muzzarela`,`Albaca`],
     precio:130,
     },    
    {id:6,
     nombre: `fugaza`,
     ingredientes:[`Cebolla`,`Muzzarela`,`Aceitunas`],
     precio:500,
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
        const nombrePizza =document.getElementById('h2pizza');
        const precioPizza =document.getElementById('h4pizza');
        if (pizza=='error'){
            nombrePizza.textContent='no se encontrearon pizzas con ese ID';
            precioPizza.textContent='';

        }
        else{
        nombrePizza.textContent=`la pizza es de ${pizza.nombre}`;
        precioPizza.textContent=`y sale $ ${pizza.precio}`;
        }
    }

    pizzas.addEventListener('submit', e => {
        // Prevenimos por defecto el comportamiento al enviar el form
        e.preventDefault();
        mensajes(idinput.value);
        idinput.value='';
    });

