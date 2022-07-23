<script setup lang="ts">
	import { computed } from "vue";

	interface TasksProps {
		modelValue?: string;
	}

	const props = defineProps<TasksProps>();
	const emit = defineEmits(["update:modelValue"]);

	const value = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		},
	});
</script>
<template>
	<input class="input" v-bind="$attrs" v-model="value" />
</template>
<style scoped>
	.input {
		flex: 1;
		padding: 16px;
		border-radius: 8px;
		border: 1px solid var(--gray-700);
		background-color: var(--gray-500);
	}

	.input::placeholder {
		color: var(--gray-300);
	}
</style>
