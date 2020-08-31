<template>
  <div>
    <section class="calendar">
      <div class="calendar__control">
        <span class="calendar__month">{{`${months[month]} de ${year}`}}</span>
        <div>
          <m-btn @click="today()" color="dark" small class="mr-1">now</m-btn>
          <m-btn @click="prev()" small class="mr-1">prev</m-btn>
          <m-btn @click="next()" small>next</m-btn>
        </div>
      </div>

      <div class="calendar__body">
        <div
          v-for="(_, idx) in Array(7)"
          :key="idx+'_'"
          class="calendar__day-week"
        >{{days[idx].substring(0, 3)}}</div>
        <div v-for="(_, idx) in Array(42)" :key="idx">
          <div v-show="false">{{day = getDayValuesByIdx(idx)}}</div>
          <div class="day" :class="day.classname">
            <span class="day__number">{{day.number}}</span>
            <div class="day__events">
              <div
                v-for="(event, idx) in day.events"
                :key="idx"
                @click="showEvent(event, $event.target, idx)"
                class="day__event"
                :style="{'background': event.color}"
              >{{event.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      ref="m-event"
      class="event m-card"
      :class="{'event--disabled': !show_event}"
      :style="{ maxWidth: `${event_maxWidth}px`, ...event_selected_style}"
    >
      <div class="event__menu m-card__actions">
        <div @click="show_event = false" class="event__btn">
          <svg class="event__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path fill="none" d="M0 0 36 36 M36 0 0 36" />
          </svg>
        </div>
      </div>
      <div class="event__body m-card__body">
        <h2 class="event__title">{{event_selected.title}}</h2>
        <h3>Fecha:</h3>
        <p>{{(event_selected.date || new Date()).toLocaleString()}}</p>
      </div>
      <div class="event__actions m-card__actions">
        <m-btn color="primary" small>Ver Más</m-btn>
      </div>
    </div>
  </div>
</template>

<script>
// Resource: https://codepen.io/jacknumber/pen/bVgLVd
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
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
    // Event
    show_event: false,
    event_selected: {},
    event_selected_style: {},
    event_maxWidth: 450,
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
  mounted() {
    this.showDate(this.date);

    this._updateSize();
    window.onresize = this._updateSize;
  },
  methods: {
    showEvent(event, target) {
      this.event_selected = event;
      this.show_event = true;

      setTimeout(() => {
        let { top, left, bottom, right } = target.getBoundingClientRect();
        let card_bounds = this.$refs["m-event"].getBoundingClientRect();

        let event_left = right + 10;
        // use this.event_maxWidth or card_bounds.width
        if (event_left + this.event_maxWidth > window.innerWidth)
          event_left = left - this.event_maxWidth - 10;

        let event_top = top;
        if (event_top + card_bounds.height > window.innerHeight)
          event_top = bottom - card_bounds.height;

        this.event_selected_style = {
          top: `${event_top}px`,
          left: `${event_left}px`,
        };
      }, 100);
    },
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
      let events = this.events.filter(({ date }) => {
        return (
          this.date.getFullYear() === date.getFullYear() &&
          this.date.getMonth() === date.getMonth() &&
          number === date.getDate()
        );
      });

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
      } else if (
        this.now.getFullYear() === this.date.getFullYear() &&
        this.now.getMonth() === this.date.getMonth() &&
        number === this.now.getDate()
      ) {
        classname = "day--now";
      }
      return { number, classname, events };
    },
    _updateSize() {
      let elements = document.getElementsByClassName("day");
      elements.forEach((element) => {
        let { width } = element.getBoundingClientRect();
        let new_height = (width * 4) / 5;
        element.style.minHeight = `${new_height}px`;
      });
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

  &__control {
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  &__month {
    font-size: 1.5rem;
    font-weight: bold;
  }
  &__day-week {
    padding: 18px;
    color: rgb(100, 100, 100);
    font-weight: bold;
    font-size: 0.85rem;
    text-align: center;
  }
}

.day {
  padding: 5px;
  transition: var(--time-transition);
  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: #eaf3ff;
  }
  &:active {
    background: #cde3ff;
  }

  &__number {
    height: max-content;
    padding: 10px;
    border-radius: 50%;
    font-weight: bold;
  }
  &__events {
    width: 100%;
  }
  &__event {
    overflow: hidden;
    max-height: 40px;
    padding: 4px;
    margin-top: 4px;

    font-size: .9rem;
    color: #fff;
    text-align: center;
    border-radius: 20px;
  }

  &--disabled {
    .day__number {
      color: #bbbbbb;
    }
  }
  &--now {
    .day__number {
      background: rgb(23, 138, 226);
      color: #fff;
    }
  }
}

.event {
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  transition: var(--time-transition);

  &__menu {
    padding: 10px;
  }
  &__body {
    max-height: 350px;
    padding-top: 0;
    overflow-y: auto;
  }
  &__actions {
    padding-top: 20px;
  }

  &__title {
    margin-bottom: 24px;
    font-size: 1.8rem;
  }

  &__btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--time-transition);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgb(228, 228, 228);
    }
    &:active {
      background: rgb(200, 200, 200);
    }
  }

  &__icon {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
    stroke-width: 6;
    stroke: rgb(46, 46, 46);
  }

  &--disabled {
    opacity: 0;
    pointer-events: none;
  }
}
</style>