<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ adress }}</h2>
    <button @click="showSchoolName">点我提示学校</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "西安文理学院",
      adress: "科技六路",
    };
  },
  methods: {
    showSchoolName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
.demo {
  background-color: aqua;
}
</style>