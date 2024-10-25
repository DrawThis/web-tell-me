<script lang="ts">
    import './nivel2.css'
    import Nav from '$lib/navbar2/navbar.svelte';
    import Next from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('nivel-2');
  });
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dibujo Básico</title>
</svelte:head>

<Nav levelNumber={2} position="circle-1"/>

<div class="container">
    <div class="text">
      <h1>El Dibujo Básico</h1>
      <hr>
      <br>
      <p>El <strong>dibujo básico</strong> es la disciplina inicial en el arte del dibujo que se enfoca en desarrollar las habilidades fundamentales necesarias para representar objetos, personas o paisajes de manera sencilla pero precisa. Este tipo de dibujo no busca resultados complejos ni estilos avanzados, sino más bien <strong>sentar las bases</strong> para que los estudiantes puedan avanzar hacia técnicas más sofisticadas.</p>
      <br>
      <p>El dibujo es la base para la mayoría de las artes visuales y sirve como herramienta tanto para la creación artística como para otras disciplinas, como el <strong>diseño, la arquitectura o la ingeniería.</strong> El dibujo básico prepara al estudiante para entender cómo se estructura la realidad visual, descomponiéndola en formas, proporciones y relaciones que son fáciles de reproducir. Además, es una <strong>herramienta de expresión personal</strong> que puede ayudar a comunicar ideas sin necesidad de palabras.</p>
      <br>
      <p>El dibujo básico es la base indispensable para cualquier persona que desee aprender a dibujar, ya sea por interés artístico o como parte de una formación más amplia en otras disciplinas visuales. A través de ejercicios simples pero efectivos, los estudiantes adquieren habilidades esenciales que les permiten avanzar hacia técnicas más complejas en el futuro. Además, <strong>fomenta el desarrollo de la creatividad</strong> y proporciona una herramienta poderosa para expresar ideas visualmente.</p>
    </div>
    <div class="image">
      <img src="https://crehana-blog.imgix.net/media/filer_public/51/bf/51bf1f58-0ae8-448b-8cfe-f94ff97e3312/ejercicios-dibujo-contorno-ciego.jpg?auto=format&q=50" alt="">
      <p>Ejercicios de dibujo de Crehana</p>
    </div>
  </div>
  <div class="timeline-container">
    <h1>Formas Básicas del Dibujo Básico</h1>
	<div class="info-container">
		<div class="info-box">
			<Icon icon="material-symbols:circle" class="info-logo" />
			<p class="info-text">Sirve como base para dibujar objetos curvos o redondos, como caras, ojos, ruedas o frutas. También ayuda a definir proporciones suaves y simétricas.</p>
		</div>
		<div class="info-box">
			<Icon icon="mdi:triangle" class="info-logo" />
			<p class="info-text">Útil para crear formas angulosas y dirigir la mirada hacia un punto. Se usa en estructuras como montañas, techos o partes del cuerpo (como la nariz).</p>
		</div>
		<div class="info-box">
			<Icon icon="material-symbols:square" class="info-logo" />
			<p class="info-text">Facilita la creación de estructuras sólidas y proporcionales, como edificios, mesas o robots. También se usa como guía para mantener alineación y simetría en un dibujo.</p>
		</div>
	</div>
    <br>
    <br>
    <div class="collage-container">
        <h2>Algunos ejemplos de Dibujo Básico</h2>
        <div class="collage">
            <img src="https://crehana-blog.imgix.net/media/filer_public/a2/bd/a2bd286a-1c56-4323-a2a6-0b87025ce365/dibujar-serpientes.png?auto=format&q=50" alt="">
            <img src="https://crehana-blog.imgix.net/media/filer_public/d3/02/d302f570-edfe-44ce-a99b-ed1235cb4a22/ejercicio-forma.png?auto=format&q=50" alt="">
            <img src="https://crehana-blog.imgix.net/media/filer_public/32/26/3226de3c-f6a5-4e9f-ae2d-43b108f10eeb/objetos.png?auto=format&q=50" alt="">
            <img src="https://crehana-blog.imgix.net/media/filer_public/fe/eb/feeb9710-0c24-4ccb-9835-14342f30c8d0/dibujos-sencillos.jpg?auto=format&q=50" alt="">
            <img src="https://crehana-blog.imgix.net/media/filer_public/23/ec/23ecc35e-41aa-4f5f-815c-df1387495d2f/perspectivas-dibujo-aprender-dibujar.jpg?auto=format&q=50" alt="">
            <img src="https://crehana-blog.imgix.net/media/filer_public/d4/6e/d46e9d45-bddf-40f5-98ad-51c0d19e0d9b/cactus.jpg?auto=format&q=50" alt="">
        </div>
    </div>
    <div class="art-container">
        <br>
        <div class="conlist">
            <div class="title">Objetivo del Dibujo Básico:</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li><strong>Desarrollar habilidades motoras:</strong> Mejorar el control del lápiz y la precisión.</li>
                    <br>
                    <li><strong>Establecer las bases:</strong> Preparar para técnicas avanzadas como retratos, paisajes complejos, o dibujo digital.</li>
					<br>
					<li><strong>Estimular la creatividad:</strong> Crear confianza en los estudiantes para plasmar ideas en el papel.</li>
                </ul>
            </div>
        </div>
        <div class="conlist">
            <div class="title">Actividades Comunes en el Dibujo Básico</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Dibujar líneas rectas y curvas repetidamente para ganar precisión.</li>
					<br>
					<li>Representar objetos cotidianos como una taza o una pelota descomponiéndolos en sus formas geométricas básicas.</li>
					<br>
					<li>Dibujar una esfera o un cubo aplicando sombra para representar la luz desde diferentes ángulos.</li>
					<br>
					<li>Dibujar un camino o un grupo de edificios utilizando un punto de referencia.</li>
					<br>
					<li>Dibujar rápidamente elementos del entorno para desarrollar agilidad y la memoria</li>
                </ul>
            </div>
            
        </div>
        <div class="conlist">
            <div class="title">Técnicas Clave en el Dibujo Básico</div>
            <hr>
            <br>
            <div class="list">
                <ul>
                    <li>Aprender a realizar líneas precisas (rectas y curvas) sin perder fluidez.</li>
                    <br>
                    <li>Descomponer objetos complejos en figuras simples como círculos, cuadrados y triángulos.</li>
                    <br>
                    <li>Aplicación de técnicas sencillas como el hachurado (líneas paralelas) y el degradado para dar sensación de luz y volumen.</li>
                    <br>
                    <li>Realizar dibujos rápidos con pocos detalles ayuda a captar la esencia de lo que se observa sin necesidad de perfeccionismo.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<a href="./3" data-sveltekit-reload data-sveltekit-preload-data="tap">
    <Next />
</a>
