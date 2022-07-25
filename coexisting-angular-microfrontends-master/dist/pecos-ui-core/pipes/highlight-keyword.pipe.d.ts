import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class HighlightKeywordPipe implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(list: any, searchText: any, type: any): any;
    static ɵfac: i0.ɵɵFactoryDef<HighlightKeywordPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<HighlightKeywordPipe, "highlightKeyword">;
}
//# sourceMappingURL=highlight-keyword.pipe.d.ts.map