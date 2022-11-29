<template>
	<main>
		<!-- heading -->
		<header>
			<img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
			<h1>Pinia Tasks {{ taskstore.name }}</h1>
		</header>
		<div>
			<TaskForm />
			<br />
		</div>

		<div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
			<nav class="filter">
				<button
					@click="filter = 'all'"
					type="button"
					class="
						inline-flex
						items-center
						rounded-md
						border border-gray-300
						bg-white
						px-4
						py-2
						text-sm
						font-medium
						text-gray-700
						shadow-sm
						hover:bg-gray-50
						focus:outline-none
						focus:ring-2
						focus:ring-indigo-500
						focus:ring-offset-2
					"
				>
					<!-- Heroicon name: mini/pencil -->
					<svg
						class="-ml-1 mr-2 h-5 w-5 text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
						/>
					</svg>
					All
				</button>

				<span class="sm:ml-3">
					<button
						@click="filter = 'favs'"
						type="button"
						class="
							inline-flex
							items-center
							rounded-md
							border border-transparent
							bg-indigo-600
							px-4
							py-2
							text-sm
							font-medium
							text-white
							shadow-sm
							hover:bg-indigo-700
							focus:outline-none
							focus:ring-2
							focus:ring-indigo-500
							focus:ring-offset-2
						"
					>
						<!-- Heroicon name: mini/check -->
						<svg
							class="-ml-1 mr-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						Favs
					</button>
				</span>
			</nav>

			<div v-if="filter === 'favs'">
				<p>Your count {{ taskstore.favCount }}</p>
				<table class="table-fixed">
					<thead>
						<tr>
							<th>Title</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody v-for="task in taskstore.favs">
						<TaskDetails :task="task" />
					</tbody>
				</table>
			</div>

			<div class="task-list" v-if="filter === 'all'">
				<p>Your total {{ taskstore.totalCount }}</p>
				<table class="table-fixed">
					<thead>
						<tr>
							<th>Title</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody v-for="task in taskstore.tasks">
						<TaskDetails :task="task" />
					</tbody>
				</table>
			</div>
		</div>

		<div class="flex justify-center">
			<div
				class="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
				v-for="sub in taskstore.subjects"
			>
				<div
					class="
						bg-blue-100
						rounded-lg
						py-5
						px-6
						mb-4
						text-base text-blue-700
						mb-3
					"
					role="alert"
				>
					<Subjects :sub="sub" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import { ref } from "vue";
	import { useTaskStore } from "./stores/TaskStore";
	import TaskDetails from "./components/TaskDetail.vue";
	import Subjects from "./components/Subject.vue";
	import TaskForm from "./components/TaskForm.vue";
	export default {
		components: { TaskDetails, Subjects, TaskForm },
		setup() {
			const taskstore = useTaskStore();
			taskstore.getrecord()
			
			const filter = ref("all");
			return { taskstore, filter };
		},
	};
</script>