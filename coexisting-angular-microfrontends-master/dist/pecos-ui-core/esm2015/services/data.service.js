import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';
import { throwError, timer } from 'rxjs';
import { catchError, mergeMap, retryWhen } from 'rxjs/operators';
import { generateUUID } from '../utils/uuid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DataService {
    constructor(http) {
        this.http = http;
        this.apiURL = '/api';
        this.excludedStatusCodes = [400, 401, 500, 504];
        this.maxRetries = 2;
        this.requestIndex = 0;
        this.uniqueId = generateUUID();
        this.headers = {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(`Frontend error: ${error.error.message}`);
        }
        else {
            console.error(`Backend error: ${error.status}, ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }
    api(path, data, method) {
        if (!method)
            method = data ? 'POST' : 'GET';
        const xid = `${this.uniqueId}-${++this.requestIndex}`;
        const res = this.http.request(method, this.apiURL + path, {
            headers: new HttpHeaders(this.headers).append('x-correlation-id', xid),
            body: data,
        });
        const { excludedStatusCodes, maxRetries } = this;
        return res.pipe(retryWhen(mergeMap((error, i) => {
            if (i + 1 > maxRetries ||
                excludedStatusCodes.includes(error.status)) {
                return throwError(error);
            }
            return timer(1000);
        })), catchError(this.handleError));
    }
    mock(path) {
        return this.http.get(`assets/mock/${path}.json?ds`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(i1.HttpClient)); };
DataService.ɵprov = i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxXQUFXLEdBQ1osTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLN0MsTUFBTSxPQUFPLFdBQVc7SUFRdEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVA1QixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLHdCQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxZQUFZLEVBQUUsQ0FBQztRQUNsQyxZQUFPLEdBQStCLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFaEMsV0FBVyxDQUFDLEtBQXdCO1FBQzFDLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxVQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsR0FBRyxDQUFJLElBQVksRUFBRSxJQUFVLEVBQUUsTUFBZ0I7UUFDL0MsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFO1lBQzNELE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQztZQUN0RSxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUNILE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDakQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUNiLFNBQVMsQ0FDUCxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFDRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVU7Z0JBQ2xCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQzFDO2dCQUNBLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsRUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBSSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksZUFBZSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O3NFQTdDVSxXQUFXO21EQUFYLFdBQVcsV0FBWCxXQUFXLG1CQURFLE1BQU07a0RBQ25CLFdBQVc7Y0FEdkIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwSGVhZGVycyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1lcmdlTWFwLCByZXRyeVdoZW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVVSUQgfSBmcm9tICcuLi91dGlscy91dWlkJztcblxudHlwZSBNZXRob2RzID0gJ0RFTEVURScgfCAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGlVUkwgPSAnL2FwaSc7XG4gIHByaXZhdGUgZXhjbHVkZWRTdGF0dXNDb2RlcyA9IFs0MDAsIDQwMSwgNTAwLCA1MDRdO1xuICBwcml2YXRlIG1heFJldHJpZXMgPSAyO1xuICBwcml2YXRlIHJlcXVlc3RJbmRleCA9IDA7XG4gIHByaXZhdGUgdW5pcXVlSWQgPSBnZW5lcmF0ZVVVSUQoKTtcbiAgaGVhZGVyczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGcm9udGVuZCBlcnJvcjogJHtlcnJvci5lcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBCYWNrZW5kIGVycm9yOiAke2Vycm9yLnN0YXR1c30sICR7ZXJyb3IuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKCdTb21ldGhpbmcgYmFkIGhhcHBlbmVkOyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICB9XG5cbiAgYXBpPFQ+KHBhdGg6IHN0cmluZywgZGF0YT86IGFueSwgbWV0aG9kPzogTWV0aG9kcykge1xuICAgIGlmICghbWV0aG9kKSBtZXRob2QgPSBkYXRhID8gJ1BPU1QnIDogJ0dFVCc7XG4gICAgY29uc3QgeGlkID0gYCR7dGhpcy51bmlxdWVJZH0tJHsrK3RoaXMucmVxdWVzdEluZGV4fWA7XG4gICAgY29uc3QgcmVzID0gdGhpcy5odHRwLnJlcXVlc3Q8VD4obWV0aG9kLCB0aGlzLmFwaVVSTCArIHBhdGgsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh0aGlzLmhlYWRlcnMpLmFwcGVuZCgneC1jb3JyZWxhdGlvbi1pZCcsIHhpZCksXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXhjbHVkZWRTdGF0dXNDb2RlcywgbWF4UmV0cmllcyB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVzLnBpcGUoXG4gICAgICByZXRyeVdoZW4oXG4gICAgICAgIG1lcmdlTWFwKChlcnJvciwgaSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGkgKyAxID4gbWF4UmV0cmllcyB8fFxuICAgICAgICAgICAgZXhjbHVkZWRTdGF0dXNDb2Rlcy5pbmNsdWRlcyhlcnJvci5zdGF0dXMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aW1lcigxMDAwKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgKTtcbiAgfVxuXG4gIG1vY2s8VD4ocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oYGFzc2V0cy9tb2NrLyR7cGF0aH0uanNvbj9kc2ApO1xuICB9XG59XG4iXX0=