import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export const hasValue = (o, fn) => {
    switch (Object.prototype.toString.call(o).charAt(8)) {
        case 'O':
            return Object.values(o).some((value) => hasValue(value, fn));
        case 'A':
            return o.some((child) => hasValue(child, fn));
        default:
            return fn(o);
    }
};
export class FilterPipe {
    transform(items, value) {
        return FilterPipe.filter(items, value);
    }
    static filter(items, value) {
        const lowerValue = value.toLowerCase();
        const testValue = (v) => String(v !== null && v !== void 0 ? v : '')
            .toLowerCase()
            .indexOf(lowerValue) > -1;
        return items.filter((item) => hasValue(item, testValue));
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{ name: 'filter' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiQzovc291cmNlL01GRS9wZWNvcy11aS1jb3JlLW1hc3Rlci9wZWNvcy11aS1jb3JlLW1hc3Rlci9zcmMvbGliLyIsInNvdXJjZXMiOlsicGlwZXMvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBTXBELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUE0QixFQUFXLEVBQUU7SUFDeEUsUUFBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25ELEtBQUssR0FBRztZQUNOLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRDtZQUNFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDO0FBR0YsTUFBTSxPQUFPLFVBQVU7SUFDckIsU0FBUyxDQUFDLEtBQVUsRUFBRSxLQUFhO1FBQ2pDLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDdkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FDM0IsTUFBTSxDQUFDLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxHQUFJLEVBQUUsQ0FBQzthQUNaLFdBQVcsRUFBRTthQUNiLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOztvRUFaVSxVQUFVOzJEQUFWLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgaGFzVmFsdWVDYWxsYmFja0Z1bmN0aW9uIHtcbiAgKHZhbHVlOiBhbnkpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgaGFzVmFsdWUgPSAobzogYW55LCBmbjogaGFzVmFsdWVDYWxsYmFja0Z1bmN0aW9uKTogYm9vbGVhbiA9PiB7XG4gIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLmNoYXJBdCg4KSkge1xuICAgIGNhc2UgJ08nOlxuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobykuc29tZSgodmFsdWUpID0+IGhhc1ZhbHVlKHZhbHVlLCBmbikpO1xuICAgIGNhc2UgJ0EnOlxuICAgICAgcmV0dXJuIG8uc29tZSgoY2hpbGQ6IGFueSkgPT4gaGFzVmFsdWUoY2hpbGQsIGZuKSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmbihvKTtcbiAgfVxufTtcblxuQFBpcGUoeyBuYW1lOiAnZmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnksIHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBGaWx0ZXJQaXBlLmZpbHRlcihpdGVtcywgdmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlcihpdGVtczogYW55W10sIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsb3dlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0ZXN0VmFsdWUgPSAodjogYW55KSA9PlxuICAgICAgU3RyaW5nKHYgPz8gJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmRleE9mKGxvd2VyVmFsdWUpID4gLTE7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaGFzVmFsdWUoaXRlbSwgdGVzdFZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==