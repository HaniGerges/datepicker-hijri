/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Placement,
} from 'popper.js';

export namespace Components {
  interface DateCalender {
    'calendarDateFormat': string;
    'dateFormat': string;
    /**
    * The language code
    */
    'langCode': string;
    'placeholder': string;
    'selectedDate': string;
    'setParentSelectedDate': any;
  }
  interface DatepickerHijri {
    'autoSetSelectedDate': boolean;
    'dateFormat': string;
    'langCode': string;
    'onDateSelectClose': boolean;
    'placeholder': string;
    'placement': Placement;
    'reference': string;
    'selectedDate': string;
  }
  interface DayNames {
    /**
    * The language code
    */
    'langCode': string;
  }
  interface MonthDays {
    'currentTime': any;
    'dateFormat': any;
    'selectedDate': any;
    'setSelectedDate': any;
  }
  interface MonthsList {
    'currentTime': any;
    'handleMonthChange': any;
  }
  interface YearsList {
    'currentTime': any;
    'handleYearChange': any;
  }
}

declare global {


  interface HTMLDateCalenderElement extends Components.DateCalender, HTMLStencilElement {}
  const HTMLDateCalenderElement: {
    prototype: HTMLDateCalenderElement;
    new (): HTMLDateCalenderElement;
  };

  interface HTMLDatepickerHijriElement extends Components.DatepickerHijri, HTMLStencilElement {}
  const HTMLDatepickerHijriElement: {
    prototype: HTMLDatepickerHijriElement;
    new (): HTMLDatepickerHijriElement;
  };

  interface HTMLDayNamesElement extends Components.DayNames, HTMLStencilElement {}
  const HTMLDayNamesElement: {
    prototype: HTMLDayNamesElement;
    new (): HTMLDayNamesElement;
  };

  interface HTMLMonthDaysElement extends Components.MonthDays, HTMLStencilElement {}
  const HTMLMonthDaysElement: {
    prototype: HTMLMonthDaysElement;
    new (): HTMLMonthDaysElement;
  };

  interface HTMLMonthsListElement extends Components.MonthsList, HTMLStencilElement {}
  const HTMLMonthsListElement: {
    prototype: HTMLMonthsListElement;
    new (): HTMLMonthsListElement;
  };

  interface HTMLYearsListElement extends Components.YearsList, HTMLStencilElement {}
  const HTMLYearsListElement: {
    prototype: HTMLYearsListElement;
    new (): HTMLYearsListElement;
  };
  interface HTMLElementTagNameMap {
    'date-calender': HTMLDateCalenderElement;
    'datepicker-hijri': HTMLDatepickerHijriElement;
    'day-names': HTMLDayNamesElement;
    'month-days': HTMLMonthDaysElement;
    'months-list': HTMLMonthsListElement;
    'years-list': HTMLYearsListElement;
  }
}

declare namespace LocalJSX {
  interface DateCalender {
    'calendarDateFormat'?: string;
    'dateFormat'?: string;
    /**
    * The language code
    */
    'langCode'?: string;
    'placeholder'?: string;
    'selectedDate'?: string;
    'setParentSelectedDate'?: any;
  }
  interface DatepickerHijri {
    'autoSetSelectedDate'?: boolean;
    'dateFormat'?: string;
    'langCode'?: string;
    'onDateSelectClose'?: boolean;
    'placeholder'?: string;
    'placement'?: Placement;
    'reference'?: string;
    'selectedDate'?: string;
  }
  interface DayNames {
    /**
    * The language code
    */
    'langCode'?: string;
  }
  interface MonthDays {
    'currentTime'?: any;
    'dateFormat'?: any;
    'selectedDate'?: any;
    'setSelectedDate'?: any;
  }
  interface MonthsList {
    'currentTime'?: any;
    'handleMonthChange'?: any;
  }
  interface YearsList {
    'currentTime'?: any;
    'handleYearChange'?: any;
  }

  interface IntrinsicElements {
    'date-calender': DateCalender;
    'datepicker-hijri': DatepickerHijri;
    'day-names': DayNames;
    'month-days': MonthDays;
    'months-list': MonthsList;
    'years-list': YearsList;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'date-calender': LocalJSX.DateCalender & JSXBase.HTMLAttributes<HTMLDateCalenderElement>;
      'datepicker-hijri': LocalJSX.DatepickerHijri & JSXBase.HTMLAttributes<HTMLDatepickerHijriElement>;
      'day-names': LocalJSX.DayNames & JSXBase.HTMLAttributes<HTMLDayNamesElement>;
      'month-days': LocalJSX.MonthDays & JSXBase.HTMLAttributes<HTMLMonthDaysElement>;
      'months-list': LocalJSX.MonthsList & JSXBase.HTMLAttributes<HTMLMonthsListElement>;
      'years-list': LocalJSX.YearsList & JSXBase.HTMLAttributes<HTMLYearsListElement>;
    }
  }
}


