<template>
  <div>
    <section>
      <h2>Calendar</h2>
      <m-calendar :events="events" />
    </section>

    <section>
      <h2>Custom Info</h2>
      <m-calendar :events="events">
        <template v-slot:event_info="{ event }">
          <div v-if="event.description" class="mt-3">
            <h4>Description:</h4>
            <p>{{event.description}}</p>
          </div>
          <div>
            <m-btn color="primary" small class="mr-1">edit</m-btn>
            <m-btn color="error" small>delete</m-btn>
          </div>
        </template>
      </m-calendar>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        title: "Mi evento 1",
        date: new Date(2020, 8, 3),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 2",
        date: new Date(2020, 8, 4),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 3",
        date: new Date(2020, 8, 5),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 4",
        date: new Date(2020, 8, 19),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 4.5",
        date: new Date(2020, 8, 19),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 5",
        date: new Date(2020, 8, 24),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 6",
        date: new Date(2020, 8, 28),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
      {
        title: "Mi evento 7",
        date: new Date(2020, 8, 30),
        color: "#178ae2",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, magnam ratione! Repudiandae delectus nostrum, porro dicta aliquid praesentium a corporis vel voluptatem eligendi totam quidem quam, labore, laboriosam consequatur expedita.",
      },
    ],
  }),
};
</script>

<style>
</style>