import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
interface hasValueCallbackFunction {
    (value: any): boolean;
}
export declare const hasValue: (o: any, fn: hasValueCallbackFunction) => boolean;
export declare class FilterPipe implements PipeTransform {
    transform(items: any, value: string): any;
    static filter(items: any[], value: string): any[];
    static ɵfac: i0.ɵɵFactoryDef<FilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FilterPipe, "filter">;
}
export {};
//# sourceMappingURL=filter.pipe.d.ts.map