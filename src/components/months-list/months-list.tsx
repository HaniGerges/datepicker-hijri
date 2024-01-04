import { Component, Prop, Watch, h } from "@stencil/core";
import moment from "moment-hijri";

@Component({
  tag: "months-list",
  styleUrl: "months-list.css",
  shadow: true,
})
export class YearsList {
  months = [
    { number: 0, name: "محرم" },
    { number: 1, name: "صفر" },
    { number: 2, name: "ربيع 1" },
    { number: 3, name: "ربيع 2" },
    { number: 4, name: "جمادي 1" },
    { number: 5, name: "جمادي 2" },
    { number: 6, name: "رجب" },
    { number: 7, name: "شعبان" },
    { number: 8, name: "رمضان" },
    { number: 9, name: "شوال" },
    { number: 10, name: "ذو القعدة" },
    { number: 11, name: "ذو الحجة" },
  ];

  @Prop() currentTime;
  @Prop() minDate;
  @Prop() maxDate;
  @Prop() dateFormat;
  @Prop() selectedDate;
  @Prop() handleMonthChange;
  @Watch("selectedDate")
  handleMinAndMaxDate(month: number) {
    let time = moment(this.selectedDate, this.dateFormat);
    time.iMonth(month);
    let formatedTime = time.format(this.dateFormat);

    if (this.minDate && !this.maxDate) {
      this.minDate = moment(this.minDate, this.dateFormat).format(
        this.dateFormat
      );
      return moment(this.minDate).isAfter(formatedTime, "month");
    }
    if (this.maxDate && !this.minDate) {
      this.maxDate = moment(this.maxDate, this.dateFormat).format(
        this.dateFormat
      );
      return moment(this.maxDate).isBefore(formatedTime, "month");
    }
    if (this.maxDate && this.minDate) {
      this.maxDate = moment(this.maxDate, this.dateFormat).format(
        this.dateFormat
      );
      this.minDate = moment(this.minDate, this.dateFormat).format(
        this.dateFormat
      );
      return (
        moment(this.minDate).isAfter(formatedTime, "month") ||
        moment(this.maxDate).isBefore(formatedTime, "month")
      );
    }
    return false;
  }

  render() {
    let monthsList = [];
    console.log(
      "🚀 ~ file: months-list.tsx:67 ~ YearsList ~ render ~ this.currentTime.iMonth():",
      this.currentTime.iMonth()
    );
    for (let i = 0; i < this.months.length; i++) {
      monthsList.push(
        <option
          key={this.months[i].number}
          value={this.months[i].number}
          selected={this.currentTime.iMonth() == this.months[i].number}
          disabled={this.handleMinAndMaxDate(i)}
        >
          {this.months[i].name}
        </option>
      );
    }

    return (
      <select class="months-list" onChange={this.handleMonthChange}>
        {monthsList}
      </select>
    );
  }
}
