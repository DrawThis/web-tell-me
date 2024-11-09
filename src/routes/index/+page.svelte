<script lang="ts">
    // Datos iniciales para las citas
    let citas = [
      { id: 1, estudiante: 'Juan Pérez', dia: '2024-11-08', hora: '10:00', duracion: '1 hora' },
      { id: 2, estudiante: 'María Gómez', dia: '2024-11-09', hora: '11:00', duracion: '45 minutos' }
    ];
    
    // Datos de nuevas citas
    let nuevaCita = { estudiante: '', dia: '', hora: '', duracion: '' };
  
    // Función para agendar una nueva cita
    function agendarCita() {
      if (nuevaCita.estudiante && nuevaCita.dia && nuevaCita.hora && nuevaCita.duracion) {
        // Agrega la nueva cita al listado
        citas = [...citas, { ...nuevaCita, id: citas.length + 1 }];
        // Reinicia los campos del formulario
        nuevaCita = { estudiante: '', dia: '', hora: '', duracion: '' };
        alert('Cita agendada correctamente.');
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  </script>
  
  <style>
    /* Estilos básicos */
    .cita-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 300px;
      margin-bottom: 20px;
    }
    .cita {
      margin-bottom: 15px;
    }
  </style>
  
  <h1>Gestión de Citas</h1>
  
  <!-- Formulario para agendar una nueva cita -->
  <div class="cita-form">
    <label>
      Estudiante:
      <input bind:value={nuevaCita.estudiante} placeholder="Nombre del estudiante" />
    </label>
    <label>
      Día:
      <input type="date" bind:value={nuevaCita.dia} />
    </label>
    <label>
      Hora:
      <input type="time" bind:value={nuevaCita.hora} />
    </label>
    <label>
      Duración:
      <input bind:value={nuevaCita.duracion} placeholder="Duración (ej. 1 hora)" />
    </label>
    <button on:click={agendarCita}>Agendar Cita</button>
  </div>
  
  <!-- Listado de citas agendadas -->
  <h2>Citas Agendadas</h2>
  {#each citas as cita}
    <div class="cita">
      <p><strong>Estudiante:</strong> {cita.estudiante}</p>
      <p><strong>Día:</strong> {cita.dia}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Duración:</strong> {cita.duracion}</p>
    </div>
  {/each}
  