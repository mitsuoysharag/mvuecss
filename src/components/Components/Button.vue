<template>
  <div>
    <section>
      <h2>Button</h2>
      <div>
        <m-btn v-for="(color, idx) in colors" :key="idx" :color="color" class="ma-1">My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>Small</h2>
      <div>
        <m-btn v-for="(color, idx) in colors" :key="idx" :color="color" small class="ma-1">My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>No Rounded</h2>
      <div>
        <m-btn
          v-for="(color, idx) in colors"
          :key="idx"
          :color="color"
          :rounded="false"
          class="ma-1"
        >My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>Text</h2>
      <div>
        <m-btn v-for="(color, idx) in colors" :key="idx" :color="color" text class="ma-1">My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>Block</h2>
      <div>
        <m-btn v-for="(color, idx) in colors" :key="idx" :color="color" block class="my-1">My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>Loading</h2>
      <div>
        <m-btn
          v-for="(color, idx) in colors"
          :key="idx"
          :color="color"
          loading
          class="ma-1"
        >My Button</m-btn>
      </div>
    </section>

    <section>
      <h2>Disabled</h2>
      <div>
        <m-btn
          v-for="(color, idx) in colors"
          :key="idx"
          :color="color"
          disabled
          class="ma-1"
        >My Button</m-btn>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ["primary", "success", "warning", "error", "dark", "light"],
  }),
};
</script>