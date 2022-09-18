<script setup lang="ts">

interface TasksProps {
	modelValue?: boolean;
}

defineProps<TasksProps>();
defineEmits(["update:modelValue"]);


</script>
<template>
	<input class="checkbox" type="checkbox" />
</template>
<style scoped>
.checkbox {
	width: 24px;
	height: 24px;
	-webkit-appearance: none;
	background: transparent;
	border: 2px solid var(--blue-500);
	border-radius: 50%;
	cursor: pointer;
}

.checkbox:checked {
	accent-color: var(--purple-500);
	background: var(--purple-500);
	border: 2px solid transparent;
	position: relative;
}

.checkbox:checked::before {
	content: "\002714";
	display: flex;
	justify-content: center;
}
</style>
