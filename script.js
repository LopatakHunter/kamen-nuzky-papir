document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');

  score1 = 0;
  score2 = 0;

  button.onclick = () => {
    do {
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Počítač";

      hrac1 = parseInt(document.getElementById("vyber").value);
      hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
      obr2.src = hrac2 + ".png";

      if (hrac1 === hrac2) {
        remiza = true;
        console.log("Remíza – opakuji hru");
      }

      // výhry hráče 1
      else if (
        (hrac1 === 0 && (hrac2 === 4 || hrac2 === 3)) || // kámen
        (hrac1 === 4 && (hrac2 === 2 || hrac2 === 3)) || // nůžky
        (hrac1 === 2 && (hrac2 === 0 || hrac2 === 1)) || // papír
        (hrac1 === 1 && (hrac2 === 0 || hrac2 === 4)) || // spock
        (hrac1 === 3 && (hrac2 === 2 || hrac2 === 1))    // tapír
      ) {
        vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
        vitez1.style.color = "red";
        score1++;
        remiza = false;
      }

      else {
        vitez2.innerHTML = "Počítač<br/>vyhrál.";
        vitez2.style.color = "blue";
        score2++;
        remiza = false;
      }

      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;

    } while (remiza);
  }
});