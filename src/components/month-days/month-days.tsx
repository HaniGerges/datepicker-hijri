import { Component, Prop, h } from "@stencil/core";
import moment from "moment-hijri";

@Component({
  tag: "month-days",
  styleUrl: "month-days.css",
  shadow: true,
})
export class MonthDays {
  englishDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  @Prop() setSelectedDate;
  @Prop() currentTime;
  @Prop() dateFormat;
  @Prop() selectedDate;
  @Prop() minDate: string = "";
  @Prop() maxDate: string = "";

  getMonthStartDayName() {
    let time = this.currentTime;
    time.startOf("iMonth");
    return time.format("dd");
  }
  monthDays() {
    return this.currentTime.iDaysInMonth();
  }

  isSelectedDate(i) {
    let time = this.currentTime;
    time.iDate(parseInt(i, 10));
    return this.selectedDate === time.format(this.dateFormat);
  }

  handleMinAndMaxDate(day: number) {
    let time = this.currentTime;
    time.iDate(day);
    if (this.selectedDate) {
      time.iMonth(moment(this.selectedDate).month());
    }
    let formatedTime = time.format(this.dateFormat);

    if (this.minDate && !this.maxDate) {
      this.minDate = moment(this.minDate, this.dateFormat).format(
        this.dateFormat
      );
      return moment(this.minDate).isSameOrAfter(formatedTime);
    }
    if (this.maxDate && !this.minDate) {
      this.maxDate = moment(this.maxDate, this.dateFormat).format(
        this.dateFormat
      );

      return moment(this.maxDate).isSameOrBefore(formatedTime);
    }
    if (this.maxDate && this.minDate) {
      this.maxDate = moment(this.maxDate, this.dateFormat).format(
        this.dateFormat
      );
      this.minDate = moment(this.minDate, this.dateFormat).format(
        this.dateFormat
      );
      return (
        moment(this.minDate).isAfter(formatedTime, "day") ||
        moment(this.maxDate).isBefore(formatedTime, "day")
      );
    }
    return false;
  }

  render() {
    let daysList = [];
    for (
      let i = this.englishDayNames.indexOf(this.getMonthStartDayName());
      i > 0;
      i--
    ) {
      daysList.push(
        <div class="month-day no-hover" key={daysList.length.toString()}></div>
      );
    }
    for (let i = 1; i < this.monthDays() + 1; i++) {
      daysList.push(
        <div
          class={"month-day " + (this.isSelectedDate(i) ? "selected" : "")}
          key={daysList.length.toString()}
        >
          <button
            class={
              "month-day-button " + (this.isSelectedDate(i) ? "selected" : "")
            }
            onClick={this.setSelectedDate}
            disabled={this.handleMinAndMaxDate(i)}
            value={i}
            type="button"
          >
            {i}
          </button>
        </div>
      );
    }

    return <div class="month-days">{daysList}</div>;
  }
}
