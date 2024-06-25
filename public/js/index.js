const $form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const $day = document.getElementById('day');
const $month = document.getElementById('month');
const $year = document.getElementById('year');
const $spanYears = document.getElementById ('spanYears');
const $spanMonths = document.getElementById('spanMonths');
const $spanDays = document.getElementById('spanDays');

const expReg ={
  patronDiayMes : /^[0-9]{0,2}$/,
   patronAño : /^[0-9]{0,4}$/
}

const validarForm = (e) => {

switch (e.target.name) {

  case "day":
    e.target.value = e.target.value.replace(/[^0-9]/g, '');

  if (e.target.value.length > 2) {
    e.target.value = e.target.value.slice(0, 2);
  }
    break;

    case "month":
      if (e.target.value.length > 2) {
        e.target.value = e.target.value.slice(0, 2);
      }
    break;

    case "year":

    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
    break;
  }
}

inputs.forEach((input)=>{
input.addEventListener('keyup', validarForm);
input.addEventListener('blur', validarForm)
})

$form.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      e.preventDefault(); // Previene la acción por defecto del Enter

      // Obtener valores de los inputs
      const day = parseInt($day.value);
      const month = parseInt($month.value);
      const year = parseInt($year.value);
    
   // Calcular la edad
      const birthDate = new Date(year, month - 1, day);

      if (birthDate.getDate() !== day || birthDate.getMonth() !== (month - 1) || birthDate.getFullYear() !== year) {
        alert('La fecha ingresada no es válida.');
        location.reload();
        return;
    }
     
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
          days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
          years--;
          months += 12;
      }

      // Mostrar resultado
      $spanYears.textContent = `${years}`;
      $spanMonths.textContent = `${months}`;
      $spanDays.textContent = `${days}`;
  }
});






