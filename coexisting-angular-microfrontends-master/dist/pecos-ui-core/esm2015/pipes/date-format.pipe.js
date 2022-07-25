import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export const DATE_FORMAT = 'MM/dd/yyyy';
export const YEAR_DATE_FORMAT = 'yyyy-MM-dd';
export const isUTCTimeZone = /\+0000$/;
export class DateFormatPipe {
    constructor() {
        this.datePipe = new DatePipe('en-US');
    }
    transform(value, nullValue = '-', isDateYearFormat) {
        if (value === null || !value || value === '-') {
            return nullValue;
            //if it's a masked DOB just return it as-is b/c it's already formatted
        }
        else if (value.includes('XX')) {
            return value;
        }
        const timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
        return this.datePipe.transform(value, isDateYearFormat ? YEAR_DATE_FORMAT : DATE_FORMAT, timezone);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'dateFormat',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJwaXBlcy9kYXRlLWZvcm1hdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFDcEQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQztBQUN4QyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQUgzQjtRQUlFLGFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQW1CbEM7SUFsQkMsU0FBUyxDQUNQLEtBQVUsRUFDVixZQUFvQixHQUFHLEVBQ3ZCLGdCQUEwQjtRQUUxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtZQUM3QyxPQUFPLFNBQVMsQ0FBQztZQUNqQixzRUFBc0U7U0FDdkU7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQy9ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzVCLEtBQUssRUFDTCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDakQsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDOzs0RUFuQlUsY0FBYzttRUFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FIMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBjb25zdCBEQVRFX0ZPUk1BVCA9ICdNTS9kZC95eXl5JztcclxuZXhwb3J0IGNvbnN0IFlFQVJfREFURV9GT1JNQVQgPSAneXl5eS1NTS1kZCc7XHJcbmV4cG9ydCBjb25zdCBpc1VUQ1RpbWVab25lID0gL1xcKzAwMDAkLztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZGF0ZUZvcm1hdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpO1xyXG4gIHRyYW5zZm9ybShcclxuICAgIHZhbHVlOiBhbnksXHJcbiAgICBudWxsVmFsdWU6IHN0cmluZyA9ICctJyxcclxuICAgIGlzRGF0ZVllYXJGb3JtYXQ/OiBib29sZWFuXHJcbiAgKTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCAhdmFsdWUgfHwgdmFsdWUgPT09ICctJykge1xyXG4gICAgICByZXR1cm4gbnVsbFZhbHVlO1xyXG4gICAgICAvL2lmIGl0J3MgYSBtYXNrZWQgRE9CIGp1c3QgcmV0dXJuIGl0IGFzLWlzIGIvYyBpdCdzIGFscmVhZHkgZm9ybWF0dGVkXHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCdYWCcpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWV6b25lID0gaXNVVENUaW1lWm9uZS50ZXN0KHZhbHVlKSA/ICdVVEMnIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgaXNEYXRlWWVhckZvcm1hdCA/IFlFQVJfREFURV9GT1JNQVQgOiBEQVRFX0ZPUk1BVCxcclxuICAgICAgdGltZXpvbmVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==