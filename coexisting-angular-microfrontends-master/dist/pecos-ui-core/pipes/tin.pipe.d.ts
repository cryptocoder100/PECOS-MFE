import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare type IdTypes = 'ein' | 'ssn';
export interface Identity {
    id: string;
    idType: IdTypes;
}
export interface Id extends Identity {
    [x: string]: any;
}
export declare class TinPipe implements PipeTransform {
    transform({ id, idType }: Id, isTokenized?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDef<TinPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<TinPipe, "TIN">;
}
//# sourceMappingURL=tin.pipe.d.ts.map