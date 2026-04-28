let unlockedPoints = JSON.parse(localStorage.getItem("progress")) || [1];

const wrongSound = document.getElementById("wrongSound");
const rightSound = document.getElementById("rightSound");

function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;
  
  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    
    img.onerror = () => {
      callback(false);
    };
  }
}

function init() {
  updatePoints();
  drawLines();
}

function updatePoints() {
  document.querySelectorAll('.point').forEach(point => {
    const id = parseInt(point.dataset.id);
    if (unlockedPoints.includes(id)) {
      point.classList.remove('locked');
    } else {
      point.classList.add('locked');
    }
  });
}


function openPoint(id) {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content');

  if (unlockedPoints.includes(id+1)) {

    checkIfImageExists(`punkt${id}/solution.jpeg`, (exists) => {
  if (exists) {
    content.innerHTML = `
      <button onclick="closeOverlay()" class="closeButton">×</button>
      <img src=punkt${id}/solution.jpeg>
      `;
  } else {
    content.innerHTML = `
      <button onclick="closeOverlay()" class="closeButton">×</button>
      <img src=punkt${id}/task.jpeg>
      `;
  }
});
  }

  else {
    if (id === 1) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt1/task.jpeg>
        <button id="switch" onclick="switchOverlay(1, 'info', 'task', 'Aufgabenstellung ansehen', 'Szenarien ansehen')">Szenarien ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point1_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point1_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>
        <div>
          <input type="checkbox" id="point1_scenario3" name="scenario3" />
          <label for="scenario3">Szenario 3</label>
        </div>
        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point1_scenario1');
        const scenario2 = document.getElementById('point1_scenario2');
        const scenario3 = document.getElementById('point1_scenario3');

        if (scenario1.checked && !scenario2.checked && scenario3.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;
          scenario3.disabled = true;

          unlock(2);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 2) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt2/task.jpeg>
        <button id="switch" onclick="switchOverlay(2, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
        <br>
        <p>Kreuze an: Wer würde seine Staatsbürgerschaft behalten?</p>
        <div>
          <input type="checkbox" id="point2_scenario1" name="scenario1" />
          <label for="scenario1">Peter</label>
        </div>
        <div>
          <input type="checkbox" id="point2_scenario2" name="scenario2" />
          <label for="scenario2">Amara</label>
        </div>
        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point2_scenario1');
        const scenario2 = document.getElementById('point2_scenario2');

        if (scenario1.checked && !scenario2.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;

          unlock(3);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 3) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt3/task.jpeg>
        <button id="switch" onclick="switchOverlay(3, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
        <br><br>
        <button id="this" onclick="{ unlock(4) }">Freischalten</button>
      `;
    }

    if (id === 4) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt4/task.jpeg>
        <button id="switch" onclick="switchOverlay(4, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
        <br>
        <button id="this" onclick="{ unlock(5) }">Freischalten</button>
      `;
    }

    if (id === 5) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt5/task.jpeg>
        <button id="switch" onclick="switchOverlay(5, 'info', 'task', 'Aufgabenstellung ansehen', 'Szenarien ansehen')">Szenarien ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point5_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point5_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>

        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point5_scenario1');
        const scenario2 = document.getElementById('point5_scenario2');

        if (scenario1.checked && !scenario2.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;

          unlock(6);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 6) {
        content.innerHTML = `
          <button onclick="closeOverlay()" class="closeButton">×</button>
          <img src=punkt6/task.jpeg>
          <button id="switch" onclick="switchOverlay(6, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
          <br><br>
          <button id="this" onclick="{ unlock(7) }">Freischalten</button>
        `
    }

    if (id === 7) {
        content.innerHTML = `
          <button onclick="closeOverlay()" class="closeButton">×</button>
          <img src=punkt7/task.jpeg>
          <button id="switch" onclick="switchOverlay(7, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
          <br><br>
          <button id="this" onclick="{ unlock(8) }">Freischalten</button>
        `
    }

    if (id === 8) {
        content.innerHTML = `
          <button onclick="closeOverlay()" class="closeButton">×</button>
          <img src=punkt8/task.jpeg>
          <button id="switch" onclick="switchOverlay(8, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
          <br>

          <label for="grundrechte-select">Wähle das entsprechende Grundrecht:</label>

          <select name="grundrechte" id="grundrechte-select">
            <option value="">--Wähle ein Grundrecht--</option>
            <option value="">Menschenwürde</option>
            <option value="">Recht auf Leben</option>
            <option value="correct">Meinungsfreiheit</option>
            <option value="">Glaubensfreiheit</option>
            <option value="">Versammlungsfreiheit</option>
            <option value="">Berufsfreiheit</option>
          </select>

          <br><br>

          <p class="possibility">Kreuze an: Geht das?</p>

          <div class="possibility">
            <input type="checkbox" id="point8_scenario1" name="scenario1" />
            <label for="scenario1">Frage B</label>
          </div>

          <div class="possibility">
            <input type="checkbox" id="point8_scenario2" name="scenario2" />
            <label for="scenario2">Frage C</label>
          </div>

          <br>

          <p class="possibility">Wo liegen die Grenzen?</p>

          <div class="possibility">
            <input type="checkbox" id="point8_possibility1" name="possibility1" />
            <label for="possibility1">Beleidigung</label>
          </div>

          <div class="possibility">
            <input type="checkbox" id="point8_possibility2" name="possibility2" />
            <label for="possibility2">Kapitalismus</label>
          </div>

          <div class="possibility">
            <input type="checkbox" id="point8_possibility3" name="possibility3" />
            <label for="possibility3">Behördenschutz</label>
          </div>

          <div class="possibility">
            <input type="checkbox" id="point8_possibility4" name="possibility4" />
            <label for="possibility4">Schulfrieden</label>
          </div>

          <br><br>

          <div>
            <label for="solution">Lösungswort:</label>

            <input
              type="text"
              id="solution"
              name="solution"
              required
              minlength="14"
              maxlength="14"
              size="14" />
          </div>

          <br>

          <button id="this" onclick="{
          const thisButton = document.getElementById('this');

          const scenario1 = document.getElementById('point8_scenario1');
          const scenario2 = document.getElementById('point8_scenario2');

          const possibility1 = document.getElementById('point8_possibility1');
          const possibility2 = document.getElementById('point8_possibility2');
          const possibility3 = document.getElementById('point8_possibility3');
          const possibility4 = document.getElementById('point8_possibility4');

          const solution = document.getElementById('solution').value;

          const select = document.getElementById('grundrechte-select');

          if (scenario1.checked && scenario2.checked && possibility1.checked && !possibility2.checked && !possibility3.checked && possibility4.checked && solution.toLowerCase() == 'pressefreiheit' && select.value == 'correct') {
            thisButton.disabled = true;
            scenario1.disabled = true;
            scenario2.disabled = true;

            possibility1.disabled = true;
            possibility2.disabled = true;
            possibility3.disabled = true;
            possibility4.disabled = true;

            unlock(9);
            rightSound.play();
          }
          else {
            wrongSound.play();         
          }
          }">Freischalten</button>
        `;
    }

    if (id === 9) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt9/task.jpeg>
        <button id="switch" onclick="switchOverlay(9, 'info', 'task', 'Aufgabenstellung ansehen', 'Szenarien ansehen')">Szenarien ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point9_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point9_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>
        <div>
          <input type="checkbox" id="point9_scenario3" name="scenario3" />
          <label for="scenario3">Szenario 3</label>
        </div>
        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point9_scenario1');
        const scenario2 = document.getElementById('point9_scenario2');
        const scenario3 = document.getElementById('point9_scenario3');

        if (!scenario1.checked && !scenario2.checked && scenario3.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;
          scenario3.disabled = true;

          unlock(10);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 10) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt10/task.jpeg>
        <button id="switch" onclick="switchOverlay(10, 'info', 'task', 'Aufgabenstellung ansehen', 'Szenarien ansehen')">Szenarien ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point10_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point10_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>

        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point10_scenario1');
        const scenario2 = document.getElementById('point10_scenario2');

        if (!scenario1.checked && !scenario2.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;

          unlock(11);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 11) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt11/task.jpeg>
        <button id="switch" onclick="switchOverlay(11, 'info', 'task', 'Aufgabenstellung ansehen', 'Szenarien ansehen')">Szenarien ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point11_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point11_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>

        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point11_scenario1');
        const scenario2 = document.getElementById('point11_scenario2');

        if (!scenario1.checked && !scenario2.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;

          unlock(12);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

    if (id === 12) {
      content.innerHTML = `
        <button onclick="closeOverlay()" class="closeButton">×</button>
        <img src=punkt12/task.jpeg>
        <button id="switch" onclick="switchOverlay(12, 'info', 'task', 'Aufgabenstellung ansehen', 'Info ansehen')">Info ansehen</button>
        <br>
        <p>Kreuze an: Welche Szenarien wären mit dem Grundgesetz vereinbar?</p>
        <div>
          <input type="checkbox" id="point12_scenario1" name="scenario1" />
          <label for="scenario1">Szenario 1</label>
        </div>
        <div>
          <input type="checkbox" id="point12_scenario2" name="scenario2" />
          <label for="scenario2">Szenario 2</label>
        </div>

        <br>
        <button id="this" onclick="{
        const thisButton = document.getElementById('this');
        const scenario1 = document.getElementById('point12_scenario1');
        const scenario2 = document.getElementById('point12_scenario2');

        if (scenario1.checked && !scenario2.checked) {
          thisButton.disabled = true;
          scenario1.disabled = true;
          scenario2.disabled = true;

          unlock(13);
          rightSound.play();
        }
        else {
          wrongSound.play();         
        }
        }">Freischalten</button>
      `;
    }

  }

  overlay.classList.remove('hidden');
}

function switchOverlay(id, imgname, original_imgname, buttonText, original_buttonText) {
  const content = document.getElementById('content');

  img = content.getElementsByTagName("img")[0]
  img.src = `punkt${id}/${imgname}.jpeg`

  button = document.getElementById('switch')
  button.innerHTML = buttonText
  button.onclick = function() {switchOverlay(id, original_imgname, imgname, original_buttonText, buttonText)}


}

function closeOverlay() {
  document.getElementById('overlay').classList.add('hidden');
}



function unlock(id) {
  if (!unlockedPoints.includes(id)) {
    unlockedPoints.push(id);
    save();
    updatePoints();
    drawLines();

    checkIfImageExists(`punkt${id-1}/solution.jpeg`, (exists) => {
  if (exists) {
    img = content.getElementsByTagName("img")[0]
      img.src = `punkt${id-1}/solution.jpeg`
  }
});
  }
}

function resetProgress() {
  if (window.confirm("Sicher, dass du das Spiel zurücksetzen möchtest?")) {
    unlockedPoints = [1];
    save();
    updatePoints();
    drawLines();
    closeOverlay()
  }
  
}

function save() {
  localStorage.setItem("progress", JSON.stringify(unlockedPoints));
}



function drawLines() {
  document.querySelectorAll('.line').forEach(l => l.remove());

  const connections = [
    ["p1", "p2"],
    ["p2", "p3"],
    ["p3", "p4"],
    ["p4", "p5"],
    ["p5", "p6"],
    ["p6", "p7"],
    ["p7", "p8"],
    ["p8", "p9"],
    ["p9", "p10"],
    ["p10", "p11"],
    ["p11", "p12"]
  ];

  connections.forEach(([id1, id2]) => {
    if (!unlockedPoints.includes(parseInt(id1.substring(1))) || !unlockedPoints.includes(parseInt(id2.substring(1)))) return;

    const p1 = document.getElementById(id1);
    const p2 = document.getElementById(id2);

    const rect1 = p1.getBoundingClientRect();
    const rect2 = p2.getBoundingClientRect();
    const mapRect = document.getElementById("map").getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2 - mapRect.left;
    const y1 = rect1.top + rect1.height / 2 - mapRect.top;
    const x2 = rect2.left + rect2.width / 2 - mapRect.left;
    const y2 = rect2.top + rect2.height / 2 - mapRect.top;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;



    const line = document.createElement("div");
    line.classList.add("line");
    line.style.width = length + "px";
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    line.style.transform = `rotate(${angle}deg)`;

    document.getElementById("map").appendChild(line);
  });
}

document.querySelectorAll('.point').forEach(point => {
  const id = parseInt(point.dataset.id);
  point.addEventListener('click', () => {
    if (!unlockedPoints.includes(id)) return;
    openPoint(id);
  });
});

window.addEventListener("resize", drawLines);

init()
window.addEventListener("DOMContentLoaded", (ev) => {setTimeout(init, 100)}); // lustiger quick-fix wegen irgend ner' komischen Server-Geschichte