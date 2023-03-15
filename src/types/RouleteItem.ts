import { Priority } from "./Priority"

export interface RouletteItem {
	id: number | null
	name: string
	icon: string | null
	priority?: Priority
}