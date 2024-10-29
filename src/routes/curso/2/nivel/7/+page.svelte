<script lang="ts">
	import './nivel7.css';
	import Nav from '$lib/navbar2/navbar.svelte';
	import Next from '$lib/button.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('nivel-7');
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Historia del Arte</title>
</svelte:head>

<Nav levelNumber={7} position="rombo-3" />

<div class="container">
	<div class="header">
		<h1>Vídeo: Lista de Materiales para dibujar</h1>
	</div>
	<div class="video-container">
		<iframe
			title=""
			src="https://www.youtube.com/embed/f57aQB8epkk"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
<div class="video-link">
	<a href="https://www.example.com/video-link">Descargar el vídeo</a>
</div>

<a href="/ingreso-cursos" data-sveltekit-reload data-sveltekit-preload-data="tap">
	<Next />
</a>

