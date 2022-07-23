<script setup lang="ts">
	import { TrashIcon } from "@heroicons/vue/solid";
	import { Task } from "../entities/Task";
	import BaseCheckbox from "./BaseCheckbox.vue";

	interface TasksProps {
		task: Task;
	}

	defineProps<TasksProps>();
	const emit = defineEmits(["complete", "remove"]);

	function completeTask(id: string) {
		return emit("complete", id);
	}

	function removeTask(id: string) {
		return emit("remove", id);
	}
</script>

<template>
	<div class="task-item-container">
		<div>
			<BaseCheckbox class="checkbox" type="checkbox" @change="completeTask(task.id)" />
			<p>{{ task.title }}</p>
		</div>
		<TrashIcon role="button" class="remove-icon" @click="removeTask(task.id)" />
	</div>
</template>
<style scoped>
	.remove-icon {
		color: var(--gray-300);
		width: 30px;
		cursor: pointer;
	}

	.remove-icon:hover {
		color: var(--red-500);
	}
	.task-item-container {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;

		background-color: var(--gray-500);
		border: 1px solid var(--gray-400);
		border-radius: 8px;
		padding: 16px;
	}

	.task-item-container div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
	}

	.task-item-container:hover {
		border: 1px solid var(--purple-500);
	}
</style>
