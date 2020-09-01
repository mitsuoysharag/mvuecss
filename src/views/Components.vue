<template>
  <div class="app">
    <m-sidebar :items="items" class="sidebar" />
    <select v-model="item_selected" class="sidebar2">
      <option
        v-for="(item, idx) in items"
        :key="idx"
        :value="item"
        @click="item.action"
      >{{item.title}}</option>
    </select>
    <div class="component">
      <router-view class="m-container" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // view: "/components",
    view: "",
    items: [],
    item_selected: {},
  }),
  mounted() {
    this.items = [
      {
        title: "Button",
        action: () => this.redirect(`${this.view}/button`),
      },
      {
        title: "Alert",
        action: () => this.redirect(`${this.view}/alert`),
      },
      {
        title: "Dialog",
        action: () => this.redirect(`${this.view}/dialog`),
      },
      {
        title: "Card",
        action: () => this.redirect(`${this.view}/card`),
      },
      {
        title: "Calendar",
        action: () => this.redirect(`${this.view}/calendar`),
      },
    ];
  },
  watch: {
    item_selected() {
      this.item_selected.action();
    },
  },
  methods: {
    redirect(path) {
      this.$router.push(path).catch(() => {});
    },
  },
};
</script>

<style lang='scss' scoped>
.app {
  height: 100vh;
  display: flex;
}
.sidebar2 {
  display: none;
}
.component {
  overflow-y: auto;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }
  .sidebar {
    display: none;
  }
  .sidebar2 {
    display: initial;
  }
}
</style>