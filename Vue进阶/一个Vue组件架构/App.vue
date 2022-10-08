<template>
  <div>
      <school></school>
      <studen></studen>
  </div>
</template>

<script>
import School from './School.vue'
import Student from './Student.vue'
    export default {
        name='App',
        component:{
            School,
            Student
        }
    }
</script>

<style>

</style>