<template>
	<button v-bind="$attrs" class="button">
		<slot />
	</button>
</template>
<style scoped>
.button {
	font-weight: bold;
	padding: 16px;
	border-radius: 8px;
	outline: 0;
	border: 0;
	background-color: var(--blue-700);

	display: flex;
	align-items: center;
	gap: 8px;
}

.button:disabled {
	cursor: not-allowed;
}
</style>
