// Variables y operaciones

// Responde las siguientes preguntas:
// ¿Que es una variable y para que sirve?: Un espacio reservado de memoria donde se almacena informacion
// ¿Cual es la diferencia entre declarar e inicializar una variable? Una variable se declara para reservar su espacio de memorio, se inicializa para guardar info en ese espacio.
// ¿Cual es la diferencia entre sumar numeros y concatenar strings? Sumar numeros como operacion matematica, concatenar es cuando se juntan dos textos para formar uno mismo
// ¿Cual operador me permite sumar y concatenar? El signo de +


var nombre = "Yeison";
var apellido = "Silva";
var nomUserPlatzi = "YeisonT";
var edad = 30;
var email = "s.partan_06@hotmail.com";
var mayorDeEdad = true;
var dineroAhorrado = 600000;
var deudas = 200000;

var nombreCompleto = `${nombre}${apellido}`;

var dineroReal = dineroAhorrado - deudas;

//FUNCIONES

// una funcion es: Un bloque de código que hace una serie de procedimientos

// ¿Cuándo me sirve usar una función en mi código?

// Cuando encontramos una tarea que se repite varias veces en el codigo, podemos hacerla funcion y simplemente la invocamos cuando se necesite

//¿Cuál es la diferencia entre parámetros y argumentos de una función?

//Los parametros son variables dentro de la funcion misma mientras que los argumentos son variables que nosotros enviamos a la funcion al momento de invocarla

const nom = "Yeison Yahir";
const lastname = "Silva Triviño";
const completeName = nom + lastname;
const nickname = "YeisonT";

function fullName()
{        
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}


//CONDICIONALES

// 1 Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una condicional?
// Un bloque de codigo que se ejecuta en caso de que se cumpla una condicion o pregunta lógica

// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// if, else if, switch, ternario

// ¿Puedo combinar funciones y condicionales?
// Si

var tipoDeSuscripcion = suscription3;

var suscription1 = "Expert";
var suscription2 = "Expertplus";
var suscription3 = "Free"
var suscription4 = "Basic"


function suscripcion()
{
    if (tipoDeSuscripcion == suscription4)
    {
        console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
    }  
    else if(tipoDeSuscripcion == suscription1)
    {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if(tipoDeSuscripcion == suscription2)
    {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    else
    {
        console.log("Solo puedes tomar los cursos gratis");
    }

}

suscripcion()

var miSuscripcion = Expert
var suscripciones = ["Free", "Basic", "Expert", "Expertplus"];

var Free = 0;
var Basic = 1;
var Expert = 2;
var Expertplus = 3;

function tipoDeSuscripcion()
{
    if(miSuscripcion == suscripciones.length[0])
    {
        console.log("Solo puedes tomar los cursos gratis");
    }
    if(suscripciones.length[1])
    {
        console.log("")

    }
}



//CICLOS

// ¿Qué es un ciclo?
// ¿Qué tipos de ciclos existen en JavaScript?
// ¿Qué es un ciclo infinito y por qué es un problema?
// ¿Puedo mezclar ciclos y condicionales?

// 1. Un bloque de codigo que se repite n veces
// 2. for, for of, for in, while, do-while
// 3. Es un ciclo que nunca se va a detener, puede causar que nuestro ordenador se apague por exceso consumo de memoria en el navegador
// 4. Si se puede



//LISTAS

// ¿Qué es un array?
// ¿Qué es un objeto?
// ¿Cuándo es mejor usar objetos o arrays?
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

// 1. Son un conjunto de valores del mismo tipo almacenados en una sola variable
// 2. Un objeto es una colección de propiedades
// 3. Su uso depende de la necesidad del problema
// 4. Si se pueden mezclar

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var inventario = ["Nevera", "Tv", "Laptop", "Clelular", "Tablet", "PS5"];


var unaFuncion = (array) => 
{
    console.log(array[0]);
};

unaFuncion(inventario);


//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var frutas = ["Pera", "Manzana", "Durazno", "Fresa", "Mandarina"];

var otraFuncion = (array) =>
{
    array.forEach((Element) => 
    {    
      console.log(Element);
    });
};

otraFuncion(frutas);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var persona = 
{
    nombre: "Yeison",
    apellido: "Silva",
    edad: 30
};

var unaFuncion = (objeto) => 
{
    Object.values(objeto).forEach((Element) =>
    {
        console.log(Element);
    })
};

unaFuncion(persona);