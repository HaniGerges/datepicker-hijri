import { Component, Prop, h, State } from "@stencil/core";
import moment from "moment-hijri";

@Component({
  tag: "date-calender",
  styleUrl: "date-calender.css",
  shadow: true,
})
export class DateCalender {
  arabicDayNames = ["ح", "ن", "ث", "ر", "خ", "ج", "س"];
  arabicFullDayNames = [
    "احد",
    "اثنين",
    "ثلاثاء",
    "اربعاء",
    "خميس",
    "جمعة",
    "سبت",
  ];
  englishDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  /**
   * The language code
   */
  @Prop({ reflect: true }) langCode: string = "ar";
  @Prop({ reflect: true }) dateFormat: string = "iYYYY/iMM/iDD";
  @Prop({ reflect: true }) calendarDateFormat: string = "iDD iMMMM iYYYY";
  @Prop({ reflect: true }) selectedDate: string = "";
  @Prop({ reflect: true }) minDate: string = "";
  @Prop({ reflect: true }) maxDate: string = "";
  @Prop({ reflect: true }) placeholder: string = "";

  @Prop() setParentSelectedDate;

  @State() currentTime = moment(this.selectedDate, this.dateFormat);

  subtractMonth = () => {
    let time = this.currentTime;
    time.iMonth(time.iMonth() - 1);
    time.iDate(parseInt(this.getSelectedDay(), 10));
    if (this.minDate) {
      const minDate = moment(this.minDate, this.dateFormat);
      if (time.isBefore(minDate, "month")) {
        return;
      }
    }
    this.currentTime = time;
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
  };

  addMonth = () => {
    let time = this.currentTime;
    time.iMonth(time.iMonth() + 1);
    time.iDate(parseInt(this.getSelectedDay(), 10));
    // check if the selected date is in the newer than max date
    if (this.maxDate) {
      const maxDate = moment(this.maxDate, this.dateFormat);
      if (time.isAfter(maxDate, "month")) {
        return;
      }
    }
    this.currentTime = time;
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
  };

  validateMinDate() {
    let time = this.currentTime;
    time.iMonth(time.iMonth() - 1);
    time.iDate(parseInt(this.getSelectedDay(), 10));
    if (this.minDate) {
      const minDate = moment(this.minDate, this.dateFormat);
      return time.isSameOrBefore(minDate, "month");
    }
    return false;
  }

  validateMaxDate() {
    let time = this.currentTime;
    time.iMonth(time.iMonth() + 1);
    time.iDate(parseInt(this.getSelectedDay(), 10));
    if (this.maxDate) {
      const maxDate = moment(this.maxDate, this.dateFormat);
      return time.isSameOrAfter(maxDate, "month");
    }
    return false;
  }

  setSelectedDate = (event) => {
    let time = this.currentTime;
    time.iDate(parseInt(event.target.value, 10));
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;

    this.setParentSelectedDate(this.selectedDate);
  };

  getMonthStartDayName() {
    let time = this.currentTime;
    time.startOf("iMonth");
    return time.format("dd");
  }

  getMonthName(format = "iDD iMMMM iYYYY") {
    return this.currentTime.format(format);
  }
  getSelectedDay() {
    let time = this.currentTime;
    let date = time.iDate();

    if (this.selectedDate) {
      time = moment(this.selectedDate, this.dateFormat);
      date = time.iDate();
    }
    if (date > this.currentTime.iDaysInMonth()) {
      date = 1;
    }
    return date;
  }

  handleYearChange = (event) => {
    let time = this.currentTime;
    time.iYear(parseInt(event.target.value, 10));
    time.iDate(parseInt(this.getSelectedDay(), 10));
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
    this.setParentSelectedDate(this.selectedDate);
  };

  handleMonthChange = (event) => {
    let time = this.currentTime;
    time.iMonth(parseInt(event.target.value, 10));
    time.iDate(parseInt(this.getSelectedDay(), 10));
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
    this.setParentSelectedDate(this.selectedDate);
  };

  render() {
    return (
      <div class="date-calender">
        <div class="date-calender-controls">
          <button
            class="control-button previous-button"
            onClick={this.subtractMonth}
            type="button"
            disabled={this.validateMinDate()}
          >
            {"<"}
          </button>
          <strong class="month-name">
            {this.getMonthName(this.calendarDateFormat)}
          </strong>
          <button
            class="control-button next-button"
            onClick={this.addMonth}
            type="button"
            disabled={this.validateMaxDate()}
          >
            {" "}
            {">"}{" "}
          </button>
          <div>
            <years-list
              currentTime={this.currentTime}
              dateFormat={this.dateFormat}
              minDate={this.minDate}
              maxDate={this.maxDate}
              handleYearChange={this.handleYearChange}
            ></years-list>
            <months-list
              currentTime={this.currentTime}
              dateFormat={this.dateFormat}
              selectedDate={this.selectedDate}
              minDate={this.minDate}
              maxDate={this.maxDate}
              handleMonthChange={this.handleMonthChange}
            ></months-list>
          </div>
        </div>
        <day-names langCode={this.langCode}></day-names>
        <month-days
          currentTime={this.currentTime}
          dateFormat={this.dateFormat}
          selectedDate={this.selectedDate}
          minDate={this.minDate}
          maxDate={this.maxDate}
          setSelectedDate={this.setSelectedDate}
        ></month-days>
      </div>
    );
  }
}
