import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ZipCodePipe {
    transform(value) {
        let zip = value;
        if (zip && zip.length > 5) {
            if (zip.includes('-'))
                return zip;
            return `${zip.substr(0, 5)}-${zip.substr(5)}`;
        }
        else {
            return zip;
        }
    }
}
ZipCodePipe.ɵfac = function ZipCodePipe_Factory(t) { return new (t || ZipCodePipe)(); };
ZipCodePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "zipCode", type: ZipCodePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZipCodePipe, [{
        type: Pipe,
        args: [{ name: 'zipCode' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLWNvZGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJwaXBlcy96aXAtY29kZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDaEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztZQUNsQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQzs7c0VBVFUsV0FBVzs2REFBWCxXQUFXO2tEQUFYLFdBQVc7Y0FEdkIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnemlwQ29kZScgfSlcbmV4cG9ydCBjbGFzcyBaaXBDb2RlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHppcCA9IHZhbHVlO1xuICAgIGlmICh6aXAgJiYgemlwLmxlbmd0aCA+IDUpIHtcbiAgICAgIGlmICh6aXAuaW5jbHVkZXMoJy0nKSkgcmV0dXJuIHppcDtcbiAgICAgIHJldHVybiBgJHt6aXAuc3Vic3RyKDAsIDUpfS0ke3ppcC5zdWJzdHIoNSl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHppcDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==