<script setup lang="ts">
import Header from "./components/Header.vue";
import TaskList from "./components/TaskList.vue";
import TaskForm from "./components/TaskForm.vue";
import { LocalStorageProvider } from "./provider/Localstorage";

import { Task } from "./entities/Task";
import { ref } from "vue";

const repository = new LocalStorageProvider();
const tasks = ref<Task[]>(repository.getAll());

function addTask(title: string) {
	const id = new Date().getTime();
	const newTask: Task = { id, title: title, isCompleted: false };
	tasks.value.push(newTask);
	repository.create(newTask);
}

function removeTask(id: number) {
	tasks.value = tasks.value.filter((task) => task.id !== id);
	repository.delete(id);
}

function completeTask(id: number) {
	const task = tasks.value.find((task) => task.id === id);
	if (task) {
		task.isCompleted = !task.isCompleted;
		repository.update(task.id, task);
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
	.app>*:not(header) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
}
</style>
