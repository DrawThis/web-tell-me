<script>
    import '$lib/css/bootstrap.min.css';
    import '$lib/css/style.css';
    import '$lib/css/apoyo.css';
    import '$lib/css/importan.css';
  import { onMount } from 'svelte';
  
  let citasConfirmadas = []; 
  let currentTab = 'pendientes';

  const showTab = (tab) => {
    currentTab = tab;
  };

  const aceptarCita = (nombre, fecha, hora) => {
    citasConfirmadas.push({ nombre, fecha, hora });
    alert(`Cita con ${nombre} aceptada`);
    showTab('confirmadas');
  };

  const verCita = (nombre, fecha, hora) => {
    alert(`Cita con ${nombre} para el ${fecha} a las ${hora}`);
  };
</script>

{#if currentTab === 'pendientes'}
  <div class="content">
    <h2>Citas Pendientes</h2>
    <div class="card">
      <div class="card-header">Ana García</div>
      <div class="card-body">
        <p>Fecha: 24/10/2023</p>
        <p>Hora: 10:00</p>
        <button class="btn" on:click={() => aceptarCita('Ana García', '24/10/2023', '10:00')}>Aceptar</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Carlos Rodríguez</div>
      <div class="card-body">
        <p>Fecha: 25/10/2023</p>
        <p>Hora: 14:00</p>
        <button class="btn" on:click={() => aceptarCita('Carlos Rodríguez', '25/10/2023', '14:00')}>Aceptar</button>
      </div>
    </div>
  </div>
{/if}

{#if currentTab === 'confirmadas'}
  <div class="content">
    <h2>Citas Confirmadas</h2>
    {#each citasConfirmadas as cita}
      <div class="card">
        <div class="card-header">{cita.nombre}</div>
        <div class="card-body">
          <p>Fecha: {cita.fecha}</p>
          <p>Hora: {cita.hora}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if currentTab === 'calendario'}
  <div class="content">
    <h2>Calendario de Citas</h2>
    <div class="calendar">
      <div class="day today" on:click={() => verCita('Ana García', '24/10/2023', '10:00')}>24<br>Ana García<br><span class="badge">10:00</span></div>
      <div class="day" on:click={() => verCita('Carlos Rodríguez', '25/10/2023', '14:00')}>25<br>Carlos Rodríguez<br><span class="badge">14:00</span></div>
      <div class="day">26</div>
      <div class="day">27</div>
      <div class="day">28</div>
      <div class="day">29</div>
      <div class="day">30</div>
    </div>
  </div>
{/if}
```
