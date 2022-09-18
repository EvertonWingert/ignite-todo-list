<script setup lang="ts">
import { ClipboardIcon } from "@heroicons/vue/solid";
</script>
<template>
	<div class="task-list-empty">
		<ClipboardIcon class="clipboard-icon" />
		<div>
			<p class="bold-text">Você ainda não tem tarefas cadastradas</p>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</div>
	</div>
</template>
<style scoped>
.bold-text {
	font-weight: bold;
}

.clipboard-icon {
	width: 64px;
	height: 64px;
	margin: 0 auto;
	margin-top: calc((64px / 2) * -1);
}

.task-list-empty {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	border-radius: 8px;
	color: var(--gray-300);
	border-top: 1px solid var(--gray-400);
	padding: 4rem 1.5rem;
	margin-top: 1.5rem;
}
</style>
