<template>
  <div>
    <p>Year: {{year}}</p>
    <p>Month: {{months[month]}}</p>

    <m-btn @click="today()" small>Now</m-btn>
    <m-btn @click="prev()" small>Prev</m-btn>
    <m-btn @click="next()" small>Next</m-btn>

    <div class="my-1"></div>

    <section class="calendar">
      <div v-for="(_, idx) in Array(7)" :key="idx+'_'" class="day-week">{{days[idx]}}</div>
      <div v-for="(_, idx) in Array(42)" :key="idx">
        <div v-show="false">{{day = getDayValuesByIdx(idx)}}</div>
        <div class="day" :class="day.classname">{{day.number}}</div>
      </div>
    </section>
  </div>
</template>

<script>
// Resource: https://codepen.io/jacknumber/pen/bVgLVd
export default {
  data: () => ({
    days: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    now: new Date(),
    date: new Date(),
    //
    year: null,
    month: null,
    day_first: 0,
    days_in_month: 0,
  }),
  watch: {
    date() {
      this.showDate(this.date);
    },
  },
  created() {
    this.showDate(this.date);
  },
  methods: {
    showDate(date) {
      let { year, month, first_day, total_days } = this.getDateValues(date);
      this.year = year;
      this.month = month;
      this.first_day = first_day;
      this.total_days = total_days;
    },
    getDateValues(date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let first_day = new Date(year, month, 1).getDay();
      // 0 = last day of the previous month
      let total_days = new Date(year, month + 1, 0).getDate();

      return { year, month, first_day, total_days };
    },
    getDayValuesByIdx(idx) {
      let number = idx - this.first_day + 1;
      let classname = "";

      if (number < 1) {
        let prev_total_days = new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          0
        ).getDate();
        number = prev_total_days + number;
        classname = "day--disabled";
      } else if (number > this.total_days) {
        number = number - this.total_days;
        classname = "day--disabled";
      }
      return { number, classname };
    },
    // CALENDAR CONTROL
    today() {
      this.date = this.now;
    },
    prev() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    },
    next() {
      this.date = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        1
      );
    },
  },
};
</script>

<style lang='scss' scoped>
.calendar {
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 10px #ccc;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-week {
  padding: 18px;
  background: rgb(23, 138, 226);

  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.day {
  height: 100px;
  padding: 10px;

  transition: 0.3s;
  cursor: pointer;

  user-select: none;

  &:hover {
    background: #eaf3ff;
  }
  &:active {
    background: #cde3ff;
  }

  &--disabled {
    color: #ccc;
  }
}
</style>