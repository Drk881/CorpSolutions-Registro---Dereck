document.getElementById('visitorForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const cedula = document.getElementById('cedula');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const departamento = document.getElementById('departamento');
    const motivo = document.getElementById('motivo');
  

    LimpiarErrors();
  
    let valid = true;
  
    if (!cedula.value.trim()) {
      showError(cedula, 'errorCedula', 'La cédula es obligatoria.');
      valid = false;
    } else if (!/^\d{3}-\d{6}-\d{4}[A-Z]{1}$/i.test(cedula.value.trim())) {
      showError(cedula, 'errorCedula', 'Formato inválido. Ejemplo: 999-999999-9999X');
      valid = false;
    }
  
    if (!nombres.value.trim()) {
      showError(nombres, 'errorNombres', 'Los nombres son obligatorios.');
      valid = false;
    }
  
    if (!apellidos.value.trim()) {
      showError(apellidos, 'errorApellidos', 'Los apellidos son obligatorios.');
      valid = false;
    }
  
    if (!departamento.value) {
      showError(departamento, 'errorDepartamento', 'Debe seleccionar un departamento.');
      valid = false;
    }
  
    if (!motivo.value.trim()) {
      showError(motivo, 'errorMotivo', 'El motivo es obligatorio.');
      valid = false;
    }
  
    if (valid) {
      AddTabla(cedula.value, nombres.value, apellidos.value, departamento.value, motivo.value);
      this.reset();
    }
  });
  
  function showError(input, errorId, message) {
    input.classList.add('error');
    document.getElementById(errorId).textContent = message;
  }
  
  function LimpiarErrors() {
    document.querySelectorAll('.form-control, .form-select').forEach(input => input.classList.remove('error'));
    document.querySelectorAll('.form-text.text-danger').forEach(el => el.textContent = '');
  }
  
  function AddTabla(cedula, nombres, apellidos, departamento, motivo) {
    const table = document.getElementById('visitorsTable');
    const tbody = table.querySelector('tbody');
  
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cedula}</td>
      <td>${nombres}</td>
      <td>${apellidos}</td>
      <td>${departamento}</td>
      <td>${motivo}</td>
    `;
  
    tbody.appendChild(row);
    table.classList.remove('d-none');
  }
  