import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PhoneNumberPipe {
    transform(value) {
        if (value) {
            value = value.replace(/\D/g, '');
            if (value.length <= 10) {
                return `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6)}`;
            }
            else {
                return `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6, 4)} ext ${value.substr(10)}`;
            }
        }
        else {
            return '-';
        }
    }
}
PhoneNumberPipe.ɵfac = function PhoneNumberPipe_Factory(t) { return new (t || PhoneNumberPipe)(); };
PhoneNumberPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "phoneNumber", type: PhoneNumberPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PhoneNumberPipe, [{
        type: Pipe,
        args: [{ name: 'phoneNumber' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiQzovc291cmNlL01GRS9wZWNvcy11aS1jb3JlLW1hc3Rlci9wZWNvcy11aS1jb3JlLW1hc3Rlci9zcmMvbGliLyIsInNvdXJjZXMiOlsicGlwZXMvcGhvbmUtbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxlQUFlO0lBQzFCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUNsRSxDQUFDLENBQ0YsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQ2xFLENBQUMsRUFDRCxDQUFDLENBQ0YsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7OzhFQWpCVSxlQUFlO3FFQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdwaG9uZU51bWJlcicgfSlcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICByZXR1cm4gYCgke3ZhbHVlLnN1YnN0cigwLCAzKX0pICR7dmFsdWUuc3Vic3RyKDMsIDMpfS0ke3ZhbHVlLnN1YnN0cihcbiAgICAgICAgICA2XG4gICAgICAgICl9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgKCR7dmFsdWUuc3Vic3RyKDAsIDMpfSkgJHt2YWx1ZS5zdWJzdHIoMywgMyl9LSR7dmFsdWUuc3Vic3RyKFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNFxuICAgICAgICApfSBleHQgJHt2YWx1ZS5zdWJzdHIoMTApfWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnLSc7XG4gICAgfVxuICB9XG59XG4iXX0=