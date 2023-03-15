<template>
	<div class="roulette-item" :class="`roulette-item__${item.priority}`">
		<div>
			<span class="roulette-item__icon">{{ item.icon }}</span>
			<span class="roulette-item__title">{{ item.name }}</span>
		</div>
		<div class="roulette-item__icon-close">
			<svg-icon type="mdi" :path="mdiCloseOutline" @click="removeRouletteItem(item)"></svg-icon>
		</div>
	</div>
</template>

<script setup lang="ts">
/*@ts-ignore */
import SvgIcon from '@jamescoyle/vue-icon';
import type { RouletteItem } from '../types'
import { mdiCloseOutline } from '@mdi/js';
import { useRoulette } from '../store/useRoulette';

defineProps<{ item: RouletteItem }>()

const { removeRouletteItem } = useRoulette()
</script>

<style scoped lang="scss">
.roulette-item{
	display: flex;
	justify-content: space-between;
	gap: .25rem;
	border: 5px dashed transparent;
	border-radius: 12px;
	padding: .5rem;
	&__low{
		border: 5px dashed #00000029;
	}
	&__medium{
		border: 5px dashed #1b6298fe;
	}
	&__high{
		border: 5px dashed #f13232;
	}
	&__title{
		font-size: 16px;
		font-weight: 900;
	}
	&__icon{
		width: 20px;
		height: 20px;
		margin-right: .5rem;
	}
	&__icon-close{
		width: 20px;
		color: #d4d4d4;
	}
}
</style>