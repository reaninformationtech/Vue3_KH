<template>
	<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
		<form @submit.prevent="handleSubmit">
			<div class="form-group mb-6">
				<input
					type="text"
                    v-model="newTask"
					class="
						form-control
						block
						w-full
						px-3
						py-1.5
						text-base
						font-normal
						text-gray-700
						bg-white bg-clip-padding
						border border-solid border-gray-300
						rounded
						transition
						ease-in-out
						m-0
						focus:text-gray-700
						focus:bg-white
						focus:border-blue-600
						focus:outline-none
					"
					id="exampleInput7"
					placeholder="Name"
				/>
			</div>

			<button
				type="submit"
				class="
					w-full
					px-6
					py-2.5
					bg-blue-600
					text-white
					font-medium
					text-xs
					leading-tight
					uppercase
					rounded
					shadow-md
					hover:bg-blue-700 hover:shadow-lg
					focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
					active:bg-blue-800 active:shadow-lg
					transition
					duration-150
					ease-in-out
				"
			>
				Send
			</button>
		</form>
	</div>
</template>

<script>
	import { useTaskStore } from "../stores/TaskStore";
	import { ref } from "vue";
	export default {
		setup() {
			const taskStore = useTaskStore();
			const newTask = ref("");
			const handleSubmit = () => {
				if (newTask.value.length > 0) {
					taskStore.addTask({
						name: newTask.value,
						isFav: false,
						id: Math.floor(Math.random() * 1000),
					});
					newTask.value = "";
				}
			};

			return { handleSubmit, newTask };
		},
	};
</script>
