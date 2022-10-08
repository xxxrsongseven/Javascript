<template>
  <div class="demo">
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentName: "何子琪",
      age: 21, 
    };
  },
};
</script>

<style>
.demo {
  background-color: aqua;
}
</style>