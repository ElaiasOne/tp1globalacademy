const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity_level');

  const tmb = Math.round(
    gender === 'female'
    ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 *age)) 
    : (66 + (13.7 * weight) + (5 * height) - (6.8 *age)) 
  );

  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  
  const layout = `
    <h2>Aqui está su resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Su metabolismo basal es de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para mantener su peso necesita consumir en promedio <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso necesita consumir en promedio <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganar peso necesita consumir en promedio <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
  `;

  const result = document.getElementById('result');

  result.innerHTML = layout; 
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}