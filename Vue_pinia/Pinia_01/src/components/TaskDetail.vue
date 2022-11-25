<template>
    <div class="grid grid-rows-1 grid-flow-col gap-2">
        <div class="row-start-2 row-span-2">{{ task.name}}</div>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script>
export default  ({
    props:['task']
})
</script>
