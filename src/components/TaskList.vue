<script setup lang="ts">
	import { computed } from "vue";
	import { Task } from "../entities/Task";
	import EmptyTask from "./EmptyTask.vue";
	import TaskItem from "./TaskItem.vue";

	interface TasksProps {
		tasks: Task[];
	}

	const props = defineProps<TasksProps>();

	const totalTasksCreated = computed(() => props.tasks?.length);
	const totalTasksDone = computed(() => props.tasks?.reduce((acc, cur) => acc + Number(cur.isCompleted), 0));

	const emit = defineEmits(["on-complete", "on-remove"]);

	function completeTask(id: string) {
		return emit("on-complete", id);
	}

	function removeTask(id: string) {
		return emit("on-remove", id);
	}
</script>

<template>
	<div class="task-container">
		<div class="task-info-container">
			<p class="info-text-created">
				Tarefas criadas
				<span class="task-info-counter">{{ totalTasksCreated }}</span>
			</p>
			<p class="info-text-done">
				Concluídas
				<span class="task-info-counter">
					{{ !totalTasksCreated ? totalTasksCreated : `${totalTasksDone} de ${totalTasksCreated}` }}
				</span>
			</p>
		</div>
		<Transition>
			<EmptyTask v-if="!tasks.length" />
			<TransitionGroup v-else name="list" tag="div" class="task-list-container" mode="out-in">
				<div v-for="task in tasks" :key="task?.id">
					<TaskItem :task="task" @complete="completeTask" @remove="removeTask" />
				</div>
			</TransitionGroup>
		</Transition>
	</div>
</template>
<style scoped>
	.task-container {
		margin: 64px auto 0;
		max-width: 736px;
	}

	.task-info-container {
		display: flex;
		justify-content: space-between;
		max-width: 736px;
		margin: 0 auto;
	}

	.info-text-created {
		font-weight: bold;
		color: var(--blue-500);
	}

	.info-text-done {
		font-weight: bold;
		color: var(--purple-500);
	}

	.task-info-counter {
		color: var(--gray-200);
		background-color: var(--gray-400);
		padding: 2px 8px;
		border-radius: 9999px;
	}

	.task-list-container {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.list-move,
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	.list-leave-active {
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
