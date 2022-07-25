import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EmptyDashPipe {
    transform(value) {
        if (value === null ||
            value === '' ||
            value === undefined ||
            value === ' ') {
            return '-';
        }
        else
            return value;
    }
}
EmptyDashPipe.ɵfac = function EmptyDashPipe_Factory(t) { return new (t || EmptyDashPipe)(); };
EmptyDashPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "emptyDash", type: EmptyDashPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmptyDashPipe, [{
        type: Pipe,
        args: [{ name: 'emptyDash' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktZGFzaC5waXBlLmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbInBpcGVzL2VtcHR5LWRhc2gucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFDRSxLQUFLLEtBQUssSUFBSTtZQUNkLEtBQUssS0FBSyxFQUFFO1lBQ1osS0FBSyxLQUFLLFNBQVM7WUFDbkIsS0FBSyxLQUFLLEdBQUcsRUFDYjtZQUNBLE9BQU8sR0FBRyxDQUFDO1NBQ1o7O1lBQU0sT0FBTyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7MEVBVlUsYUFBYTtpRUFBYixhQUFhO2tEQUFiLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZW1wdHlEYXNoJyB9KVxuZXhwb3J0IGNsYXNzIEVtcHR5RGFzaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICB2YWx1ZSA9PT0gJycgfHxcbiAgICAgIHZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHZhbHVlID09PSAnICdcbiAgICApIHtcbiAgICAgIHJldHVybiAnLSc7XG4gICAgfSBlbHNlIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19