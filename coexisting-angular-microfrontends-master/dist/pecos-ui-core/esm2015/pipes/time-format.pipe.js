import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { isUTCTimeZone } from './date-format.pipe';
import * as i0 from "@angular/core";
export class TimeFormatPipe extends DatePipe {
    constructor() {
        super('en-US');
    }
    transform(value, nullValue = '-') {
        if (value === null)
            return nullValue;
        let timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
        return super.transform(value, 'shortTime', timezone);
    }
}
TimeFormatPipe.ɵfac = function TimeFormatPipe_Factory(t) { return new (t || TimeFormatPipe)(); };
TimeFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "timeFormat", type: TimeFormatPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeFormatPipe, [{
        type: Pipe,
        args: [{ name: 'timeFormat' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJwaXBlcy90aW1lLWZvcm1hdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR25ELE1BQU0sT0FBTyxjQUFlLFNBQVEsUUFBUTtJQUMxQztRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0QsU0FBUyxDQUFDLEtBQVUsRUFBRSxZQUFvQixHQUFHO1FBQzNDLElBQUksS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs0RUFSVSxjQUFjO21FQUFkLGNBQWM7a0RBQWQsY0FBYztjQUQxQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBpc1VUQ1RpbWVab25lIH0gZnJvbSAnLi9kYXRlLWZvcm1hdC5waXBlJztcblxuQFBpcGUoeyBuYW1lOiAndGltZUZvcm1hdCcgfSlcbmV4cG9ydCBjbGFzcyBUaW1lRm9ybWF0UGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdlbi1VUycpO1xuICB9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBudWxsVmFsdWU6IHN0cmluZyA9ICctJyk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gbnVsbFZhbHVlO1xuICAgIGxldCB0aW1lem9uZSA9IGlzVVRDVGltZVpvbmUudGVzdCh2YWx1ZSkgPyAnVVRDJyA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCAnc2hvcnRUaW1lJywgdGltZXpvbmUpO1xuICB9XG59XG4iXX0=