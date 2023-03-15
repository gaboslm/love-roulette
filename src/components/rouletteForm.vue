<template>
	<form class="emoji-form" @submit.prevent="onSubmit">
		<div class="emoji-form__body">
			<input v-model="model.name" type="text" placeholder="Name" required>
			<div class="emoji-form__priority-emoji">
				<select v-model="model.priority" name="priority" required>
					<option value="" disabled selected hidden>Choose a priority</option>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
				<div class="emoji">
					<button type="button" @click="showEmojiList">
						<p v-if="model.icon" class="selected-icon">{{ model.icon }}</p>
						<p v-else class="default-icon">☺️</p>
					</button>
					<EmojiPicker v-if="emojiList" class="emoji__list" :native="true" @select="onSelectEmoji" />
				</div>
			</div>
		</div>
		<button class="emoji-form__submit-btn" type="submit">Agregar</button>
	</form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouletteItem } from '../types';
/*@ts-ignore */
import EmojiPicker from 'vue3-emoji-picker';
import { useRoulette } from '../store/useRoulette';

const emojiList = ref(false)
const { addRouletteItem } = useRoulette()

const model: RouletteItem = reactive({
	id: null,
	name: '',
	priority: '',
	icon: null,
})

function showEmojiList(){
	emojiList.value = !emojiList.value
}

function onSelectEmoji(emoji: any) {
	model.icon = emoji.i
}

function onSubmit(){
	addRouletteItem(model)
	cleanForm()
}

function cleanForm(){
	model.id = null
	model.name = ''
	model.priority = ''
	model.icon = ''
}
</script>

<style scoped lang="scss">
.emoji-form{
	box-shadow: 0 3px 6px #00000029;
	padding: 1rem;
	margin-bottom: 1rem;
	&__priority-emoji{
		display: flex;
		flex-flow: row nowrap;
		gap: 1rem;
		margin-bottom: 1rem;
		select{
			width: 100%;
		}
	}
	&__body{
		display: flex;
		flex-flow: row nowrap;
		flex-direction: column;
		gap: .5rem;
		input, select{
			padding: 5px;
			box-shadow: 0 3px 6px #00000029;
			border-radius: 8px;
		}
		select{
			color: grey;
		}
	}
	&__submit-btn{
		width: 100%;
		padding: .25rem;
		background: #dddddd50;
		border-radius: 8px;
		box-shadow: 0 3px 6px #00000029;
	}
}
.emoji{
	position: relative;
	width: fit-content;
	.selected-icon{
		padding: 5px 7px;
	}
	.default-icon{
		font-size: 28px;
	}
	&__list{
		position: absolute;
		right: 0;
	}
}
</style>