<template>
   
        <tr>
        <td>{{ task.name}}</td>
        <td>
            <div class="icons">
            <i class="material-icons color-red" @click="taskStore.deleteTask(task.id)" >delete</i>
            <i class="material-icons" @click="taskStore.toggleFav(task.id)">favorite</i>
        </div>
        </td>
        </tr>

</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
export default  ({
    props:['task'],
    setup(){
        const taskStore= useTaskStore()
        return {taskStore}
    }
})
</script>
