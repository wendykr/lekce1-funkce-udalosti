// tady je místo pro náš program

// změna barvy na KAŽDÉ kliknutí
let actualColor = true;
function changeColor() {
  let barva = document.querySelector('.ctverecek');

  if(actualColor == true) {
    barva.style.backgroundColor = 'green';
    actualColor = false;
  } else {
    barva.style.backgroundColor = 'yellow';
    actualColor = true;
  }
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

// ukaž výsledek v prvku ID na KAŽDÉ kliknutí
let zobrazit = true;
function vypocitej() {
  document.querySelector("#vysledek");

  if(zobrazit == true) {
    document.querySelector("#vysledek").innerHTML = secti(4, 5);
    zobrazit = false;
  } else {
    document.querySelector("#vysledek").innerHTML = '';
    zobrazit = true;
  }
}

/**
 * Upozorní uživatele při spuštění.
 */
/*function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}*/

function upozorni() {
  let myAlert = "Gratulace, právě jsi spustila tuto funkci!";

  let text = document.querySelector('.ctverecek');
  text.textContent = myAlert;
  
  alert(myAlert);
  console.log(myAlert);
}