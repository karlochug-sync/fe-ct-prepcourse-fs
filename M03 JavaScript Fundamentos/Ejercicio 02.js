/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var nombre = "carlos";

   return nombre;

}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var sum = x + y;
   return sum ;


}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var rest = x - y;
   return rest;

}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:

   var div = x / y;
   return div;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multi= x * y;
   return multi;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var residuo = x % y;
   return residuo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
