import { defineStore } from "pinia";
import { RouletteItem } from '../types'

export const useRoulette = defineStore({
	id: 'roulette',
	state: (): { 
		rouletteItems: RouletteItem[] 
	} => ({
		rouletteItems: []
	}),
	actions: {
		addRouletteItem(item: RouletteItem){
			if(!item) return 
			const lastIndex = this.rouletteItems?.[this.rouletteItems.length - 1]?.id
			this.rouletteItems.push({...item, id: lastIndex ? lastIndex + 1 : 1 })
			this.saveToLocal()
		},
		removeRouletteItem(item: RouletteItem){
			this.rouletteItems = this.rouletteItems.filter(el => el.id != item.id)
			this.saveToLocal()
		},
		getFromLocal(){
			if(!localStorage.getItem('roulette')) return
			try {
				this.rouletteItems = JSON.parse(localStorage.getItem('roulette') ?? '[]')
			} catch (error) {
				console.error(error);
			}
		},
		saveToLocal(){
			localStorage.setItem('roulette', JSON.stringify(this.rouletteItems))
		}
	}
})