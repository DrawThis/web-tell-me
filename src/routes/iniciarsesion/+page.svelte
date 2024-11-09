<script>
    // @ts-nocheck
   
       import '$lib/css/mariana.css';
   
    import { onMount } from 'svelte';
    //Ejecutando funciones
    document.getElementById('btn__iniciar-sesion').addEventListener('click', iniciarSesion);
    document.getElementById('btn__registrarse').addEventListener('click', register);
    window.addEventListener('resize', anchoPage);
   
    //Declarando variables
    var formulario_login = document.querySelector('.formulario__login');
    var formulario_register = document.querySelector('.formulario__register');
    var contenedor_login_register = document.querySelector('.contenedor__login-register');
    var caja_trasera_login = document.querySelector('.caja__trasera-login');
    var caja_trasera_register = document.querySelector('.caja__trasera-register');
   
    //FUNCIONES
    function anchoPage() {
     if (window.innerWidth > 850) {
      caja_trasera_register.style.display = 'block';
      caja_trasera_login.style.display = 'block';
     } else {
      caja_trasera_register.style.display = 'block';
      caja_trasera_register.style.opacity = '1';
      caja_trasera_login.style.display = 'none';
      formulario_login.style.display = 'block';
      formulario_register.style.display = 'none';
      contenedor_login_register.style.left = '0px';
     }
    }
   
    anchoPage();
   
    function iniciarSesion() {
     if (window.innerWidth > 850) {
      formulario_login.style.display = 'block';
      contenedor_login_register.style.left = '10px';
      formulario_register.style.display = 'none';
      caja_trasera_register.style.opacity = '1';
      caja_trasera_login.style.opacity = '0';
     } else {
      formulario_login.style.display = 'block';
      contenedor_login_register.style.left = '0px';
      formulario_register.style.display = 'none';
      caja_trasera_register.style.display = 'block';
      caja_trasera_login.style.display = 'none';
     }
    }
   
    function register() {
     if (window.innerWidth > 850) {
      formulario_register.style.display = 'block';
      contenedor_login_register.style.left = '410px';
      formulario_login.style.display = 'none';
      caja_trasera_register.style.opacity = '0';
      caja_trasera_login.style.opacity = '1';
     } else {
      formulario_register.style.display = 'block';
      contenedor_login_register.style.left = '0px';
      formulario_login.style.display = 'none';
      caja_trasera_register.style.display = 'none';
      caja_trasera_login.style.display = 'block';
      caja_trasera_login.style.opacity = '1';
     }
    }
   
    const signInBtnlink = document.querySelector(`.signInBtn-Link`);
    const signUpBtnlink = document.querySelector(`.signInBtn-Link`);
    const wrapper = document.querySelector(`.wrapper`);
   
    signUpBtnlink.addEventListener(`click`, () => {
     wrapper.classList.toggle(`active`);
    });
    signInBtnlink.addEventListener(`click`, () => {
     wrapper.classList.toggle(`active`);
    });
   </script>
   
   <svelte:head>
    <!-- Inicio del encabezado del documento -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>You can tell me</title>
    <!-- Título de la página -->
   
    <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
     rel="stylesheet"
    />
   
    <link rel="stylesheet" href="css/mariana.css" />
    <!-- Enlace a la hoja de estilos -->
   </svelte:head>
   
   <main>
    <!-- Inicio del elemento principal del contenido -->
   
    <div class="contenedor__todo">
     <!-- Div contenedor principal -->
     <div class="caja__trasera">
      <!-- Div de la caja trasera -->
      <div class="caja__trasera-login">
       <!-- Div específico para inicio de sesión -->
       <h3>¿Ya tienes una cuenta?</h3>
       <!-- Título de la caja de inicio de sesión -->
       <p>Inicia sesión para entrar en la página</p>
       <!-- Descripción de la caja de inicio de sesión -->
       <button id="btn__iniciar-sesion">Iniciar Sesión</button>
       <!-- Botón para iniciar sesión -->
      </div>
      <div class="caja__trasera-register">
       <!-- Div específico para registro -->
       <h3>¿Aún no tienes una cuenta?</h3>
       <!-- Título de la caja de registro -->
       <p>Regístrate para que puedas iniciar sesión</p>
       <!-- Descripción de la caja de registro -->
       <button id="btn__registrarse">Regístrarse</button>
       <!-- Botón para registrarse -->
      </div>
     </div>
   
     <!--Formulario de Login y registro-->
     <div class="contenedor__login-register">
      <!-- Div contenedor de formularios de inicio de sesión y registro -->
      <!--Login-->
   
      <form action="index.html" class="formulario__login" id="loginForm">
       <!-- Formulario de inicio de sesión -->
       <h2>Iniciar Sesión</h2>
       <!-- Título del formulario -->
       <input type="text" placeholder="Correo Electrónico" id="email" />
       <!-- Campo de entrada de correo electrónico -->
       <input type="password" placeholder="Contraseña" id="password" />
       <!-- Campo de entrada de la contraseña -->
       <button type="submit">Entrar</button>
       <!-- Botón para enviar el formulario -->
      </form>
   
      <!-- Script para validar el formulario de inicio de sesión -->
      <script>
       document.getElementById('loginForm').addEventListener('submit', function (event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
   
        if (email === '' || password === '') {
         alert('Por favor complete todos los campos');
         event.preventDefault();
        }
       });
      </script>
   
      <!--Register-->
      <form action="index.html" class="formulario__register" id="registerForm">
       <!-- Formulario de registro -->
       <h2>Regístrarse</h2>
       <!-- Título del formulario -->
       <input type="text" placeholder="Nombre completo" id="fullName" />
       <!-- Campo de entrada de nombre completo -->
       <input type="text" placeholder="Correo Electrónico" id="registerEmail" />
       <!-- Campo de entrada de correo electrónico -->
       <input type="text" placeholder="Usuario" id="username" />
       <!-- Campo de entrada de usuario -->
       <input type="password" placeholder="Contraseña" id="registerPassword" />
       <!-- Campo de entrada de contraseña -->
       <button type="submit">Regístrarse</button>
       <!-- Botón para enviar el formulario -->
      </form>
   
      <script>
       document.getElementById('registerForm').addEventListener('submit', function (event) {
        var fullName = document.getElementById('fullName').value.trim();
        var email = document.getElementById('registerEmail').value.trim();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('registerPassword').value.trim();
   
        if (fullName === '' || email === '' || username === '' || password === '') {
         alert('Por favor complete todos los campos');
         event.preventDefault();
        }
       });
      </script>
     </div>
    </div>
   </main>
   