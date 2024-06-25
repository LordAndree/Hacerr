import { writable } from 'svelte/store';
import type { CheckLists } from '$lib';

export const checklistStore = writable<CheckLists[]>([]);
