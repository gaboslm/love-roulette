<template>
	<div class="main-container">
		<RouletteForm/>
		<Roulette/>
	</div>
</template>

<script setup lang="ts">
import Roulette from './components/roulette.vue';
import RouletteForm from './components/rouletteForm.vue';
</script>

<style scoped lang="scss">
.main-container{
	margin: 0 auto;
    max-width: 400px;
    height: 100%;
	padding: 1rem;
}
</style>
