<script>
    import '$lib/css/bootstrap.min.css';
    import '$lib/css/style.css';
    import '$lib/css/apoyo.css';
    import '$lib/css/buensasss.css';
    import flatpickr from 'flatpickr';
    flatpickr("#date", {
      dateFormat: "Y-m-d",
    });
   
    import { onMount } from 'svelte';
    let showSpinner = true;
  
    // Simula la carga de datos con un timeout
    onMount(() => {
      setTimeout(() => {
        showSpinner = false;
      }, 1000); // Esconde el spinner después de 1 segundo
    });
  </script>
  
  <svelte:head>
    <title>You Can Tell Me</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/apoyo.css" rel="stylesheet" />
    <link href="buensasss.css" rel="stylesheet" />
  </svelte:head>
  
  {#if showSpinner}
    <div
      id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {/if}
  
  <!-- Navbar & Hero Start -->
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" class="navbar-brand p-0">
        <h1 class="display-6 text-primary m-0">
          <img src="img/una-mariposa-de-lado.png" alt="Logo" style="width: 80px; height: auto;" />
          You can tell me
        </h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>
    </nav>
  </div>
  <!-- Navbar & Hero End -->
  
  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb">
    <ul class="breadcrumb-animation">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="container text-center py-5" style="max-width: 900px;">
      <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Apoyo Psicológico </h3>
      <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li class="breadcrumb-item"><a href="/">Inicio</a></li>
        <li class="breadcrumb-item"><a href="/importante">Editar Citas</a></li>
      </ol>
    </div>
  </div>
  
  <!-- Formulario de Cita -->
  <div class="container">
    <h2>Programar una Cita</h2>
    <form>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required />
      </div>
      <div class="form-group">
        <label for="date">Fecha</label>
        <input type="date" id="date" value="2017-06-01" />
      </div>
      <div class="time-container">
        <div class="form-group">
          <label for="start-time">Hora de Inicio</label>
          <input type="time" id="start-time" name="start-time" required />
        </div>
        <div class="form-group">
          <label for="end-time">Hora de Fin</label>
          <input type="time" id="end-time" name="end-time" required />
        </div>
      </div>
      <button type="submit">Agendar Cita</button>
    </form>
  </div>
  
  
  
  <!-- Copyright Start -->
  <div class="container-fluid copyright py-4">
  </div>
  <!-- Copyright End -->
  
  <!-- Back to Top -->
  <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
  
  <!-- JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/lightbox/js/lightbox.min.js"></script>
  
  <!-- Template Javascript -->
  <script src="js/main.js"></script>
  