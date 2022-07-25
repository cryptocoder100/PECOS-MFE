import { TitleCasePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TitleCaseExtendedPipe extends TitleCasePipe implements PipeTransform {
    constructor();
    transform(value: any, ...args: any[]): any;
    private isAbbreviation;
    private forSpecialCharacters;
    static ɵfac: i0.ɵɵFactoryDef<TitleCaseExtendedPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<TitleCaseExtendedPipe, "titleCaseExtended">;
}
//# sourceMappingURL=title-case-extended.pipe.d.ts.map