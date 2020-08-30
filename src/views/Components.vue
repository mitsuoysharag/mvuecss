<template>
  <div class="app">
    <m-sidebar :items="items" />
    <div class="component">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    view: "components",
    items: []
  }),
  mounted() {
    this.items = [
      {
        title: "Button",
        action: () => this.redirect(`/${this.view}/button`)
      },
      {
        title: "Alert",
        action: () => this.redirect(`/${this.view}/alert`)
      },
      {
        title: "Dialog",
        action: () => this.redirect(`/${this.view}/dialog`)
      },
      {
        title: "Card",
        action: () => this.redirect(`/${this.view}/card`)
      }
    ];
  },
  methods: {
    redirect(path) {
      this.$router.push(path).catch(() => {});
    }
  }
};
</script>

<style lang='scss' scoped>
.app {
  height: 100vh;
  display: flex;
}
.component {
  overflow-y: auto;
  flex-grow: 1;
  padding: 20px;
}
</style>