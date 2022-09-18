<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const emit = defineEmits(["on-create"]);

function submit(event: Event) {
	const target = event.target as HTMLFormElement;

	const form = new FormData(target);
	const name = form.get("title");

	emit("on-create", name);

	target.reset();
}
</script>

<template>
	<div>
		<form class="add-task-container" @submit.prevent="submit">
			<BaseInput name="title" id="title" type="text" placeholder="Adicione uma nova tarefa" required />
			<BaseButton type="submit">Criar</BaseButton>
		</form>
	</div>
</template>
<style scoped>
.add-task-container {
	max-width: 736px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	height: 54px;
	margin-top: calc((54px / 2) * -1);
}
</style>
