import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
declare type Methods = 'DELETE' | 'GET' | 'POST' | 'PUT';
export declare class DataService {
    private http;
    private apiURL;
    private excludedStatusCodes;
    private maxRetries;
    private requestIndex;
    private uniqueId;
    headers: {
        [name: string]: string;
    };
    constructor(http: HttpClient);
    private handleError;
    api<T>(path: string, data?: any, method?: Methods): import("rxjs").Observable<T>;
    mock<T>(path: string): import("rxjs").Observable<T>;
    static ɵfac: i0.ɵɵFactoryDef<DataService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DataService>;
}
export {};
//# sourceMappingURL=data.service.d.ts.map