<template>
	<div class="roulette">
		<template v-for="item in rouletteItems">
			<rouletteItem :item="item"/>
		</template>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoulette } from '../store/useRoulette';
import rouletteItem from '../components/rouletteItem.vue'
import { onBeforeMount } from 'vue';

const { rouletteItems } = storeToRefs(useRoulette())
const { getFromLocal } = useRoulette()

onBeforeMount(() => {
	getFromLocal()
})
</script>

<style scoped>
.roulette{
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>