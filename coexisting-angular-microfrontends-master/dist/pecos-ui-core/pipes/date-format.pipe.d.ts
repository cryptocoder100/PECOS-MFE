import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare const DATE_FORMAT = "MM/dd/yyyy";
export declare const YEAR_DATE_FORMAT = "yyyy-MM-dd";
export declare const isUTCTimeZone: RegExp;
export declare class DateFormatPipe implements PipeTransform {
    datePipe: DatePipe;
    transform(value: any, nullValue?: string, isDateYearFormat?: boolean): any;
    static ɵfac: i0.ɵɵFactoryDef<DateFormatPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<DateFormatPipe, "dateFormat">;
}
//# sourceMappingURL=date-format.pipe.d.ts.map