import { Component, Prop, h } from "@stencil/core";
import moment from "moment-hijri";

@Component({
  tag: "years-list",
  styleUrl: "years-list.css",
  shadow: true,
})
export class YearsList {
  minYear = 1356;
  maxYear = 1500;

  @Prop() currentTime;
  @Prop() minDate;
  @Prop() maxDate;
  @Prop() dateFormat;
  @Prop() handleYearChange;

  handleMinAndMaxDate(year: number) {
    if (this.minDate && !this.maxDate) {
      let minDate = moment(this.minDate, this.dateFormat);
      if (minDate.iYear() > year) return true;
    }
    if (this.maxDate && !this.minDate) {
      let maxDate = moment(this.maxDate, this.dateFormat);
      if (maxDate.iYear() < year) return true;
    }
    if (this.maxDate && this.minDate) {
      let maxDate = moment(this.maxDate, this.dateFormat);
      let minDate = moment(this.minDate, this.dateFormat);
      if (maxDate.iYear() < year || minDate.iYear() > year) return true;
    }

    return false;
  }

  render() {
    let yearsList = [];

    for (let i = this.minYear; i <= this.maxYear; i++) {
      yearsList.push(
        <option
          key={i}
          value={i}
          disabled={this.handleMinAndMaxDate(i)}
          selected={this.currentTime.iYear() == i}
        >
          {i}
        </option>
      );
    }

    return (
      <select class="years-list" onChange={this.handleYearChange}>
        {yearsList}
      </select>
    );
  }
}
