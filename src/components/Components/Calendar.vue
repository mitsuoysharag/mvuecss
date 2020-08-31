<template>
  <div class="m-container">
    <section>
      <h2>Calendar</h2>
      <m-calendar :events="events"></m-calendar>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        title: "Mi evento 1",
        date: new Date(2020, 7, 3),
        color: "#178ae2",
      },
      {
        title: "Mi evento 2",
        date: new Date(2020, 7, 4),
        color: "#178ae2",
      },
      {
        title: "Mi evento 3",
        date: new Date(2020, 7, 5),
        color: "#178ae2",
      },
      {
        title: "Mi evento 4",
        date: new Date(2020, 7, 24),
        color: "#178ae2",
      },
      {
        title: "Mi evento 5",
        date: new Date(2020, 7, 24),
        color: "#178ae2",
      },
      {
        title: "Mi evento 6",
        date: new Date(2020, 7, 28),
        color: "#178ae2",
      },
      {
        title: "Mi evento 7",
        date: new Date(2020, 7, 31),
        color: "#178ae2",
      },
    ],
  }),
};
</script>

<style>
</style>