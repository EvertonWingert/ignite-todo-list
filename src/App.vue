<script setup lang="ts">
	import Header from "./components/Header.vue";
	import TaskList from "./components/TaskList.vue";
	import TaskForm from "./components/TaskForm.vue";

	import { Task } from "./entities/Task";
	import { ref } from "vue";

	const tasks = ref<Task[]>([]);

	function addTask(title: string) {
		const id = new Date().getTime().toString();
		const newTask: Task = { id, title: title, isCompleted: false };
		tasks.value.push(newTask);
	}
	function removeTask(id: string) {
		tasks.value = tasks.value.filter((task) => task.id !== id);
	}

	function completeTask(id: string) {
		const task = tasks.value.find((task) => task.id === id);
		if (task) {
			task.isCompleted = !task.isCompleted;
		}
	}
</script>

<template>
	<div class="app">
		<Header />
		<TaskForm @on-create="addTask" />
		<TaskList :tasks="tasks" @on-remove="removeTask" @on-complete="completeTask" />
	</div>
</template>
<style scoped>
	@media (max-width: 752px) {
		.app > *:not(header) {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
</style>
