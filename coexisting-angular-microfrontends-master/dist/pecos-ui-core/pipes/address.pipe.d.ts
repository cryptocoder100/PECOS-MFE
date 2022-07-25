import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export interface AddressLike {
    addressLine1?: string;
    addressLine2?: string;
    addressStateCode?: string;
    addrLine1?: string;
    addrLine2?: string;
    city?: string;
    cityName?: string;
    stateCd?: string;
    stateCode?: string;
    street1?: string;
    street2?: string;
    zip?: string;
    zipCd?: string;
    zipCode?: string;
    zipcode?: string;
    [x: string]: any;
}
export declare type AddressPipePatterns = 'default' | 'usps' | string;
export declare class AddressPipe implements PipeTransform {
    transform(o: AddressLike, isHTML?: boolean, applyTitleCase?: boolean, pattern?: AddressPipePatterns, emptyValue?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<AddressPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<AddressPipe, "address">;
}
//# sourceMappingURL=address.pipe.d.ts.map