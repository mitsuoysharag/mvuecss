<template>
  <div>
    <h2>Alert</h2>
    <section>
      <m-btn @click="setAlert(true)" color="primary" class="mr-1" small>Show</m-btn>
      <m-btn @click="setAlert(false)" color="error" small>Close</m-btn>
    </section>
    <div>
      <m-alert
        v-for="(color, idx) in colors"
        :key="idx"
        :color="color"
        v-model="show_dialog[color]"
      >This is an alert.</m-alert>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ["primary", "success", "warning", "error", "dark", "light"],
    show_dialog: {},
  }),
  created() {
    this.setAlert(true);
  },
  methods: {
    setAlert(value) {
      this.show_dialog = this.colors.reduce((obj, color) => {
        obj[color] = value;
        return obj;
      }, {});
    },
  },
};
</script>

<style lang='scss' scoped>
</style>