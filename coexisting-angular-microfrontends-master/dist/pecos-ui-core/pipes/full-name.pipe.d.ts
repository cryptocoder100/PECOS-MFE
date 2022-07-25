import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export interface FullNameLike {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    suffix?: string;
    [x: string]: any;
}
export declare type FullNamePipePatterns = 'f m l s' | 'f mi l s' | string;
export declare class FullNamePipe implements PipeTransform {
    transform(value: FullNameLike | null, pattern?: FullNamePipePatterns): string;
    static ɵfac: i0.ɵɵFactoryDef<FullNamePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FullNamePipe, "fullName">;
}
//# sourceMappingURL=full-name.pipe.d.ts.map