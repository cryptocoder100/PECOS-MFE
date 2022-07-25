import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AnnouncerService {
    constructor() {
        const el = (this._element = document.createElement('div'));
        el.className = 'sr-only';
        el.setAttribute('aria-live', 'polite');
        el.setAttribute('role', 'status');
        document.body.appendChild(el);
    }
    announce(text) {
        this._element.textContent = '';
        setTimeout(() => {
            this._element.textContent = text;
        }, 100);
    }
}
AnnouncerService.ɵfac = function AnnouncerService_Factory(t) { return new (t || AnnouncerService)(); };
AnnouncerService.ɵprov = i0.ɵɵdefineInjectable({ token: AnnouncerService, factory: AnnouncerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncerService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovc291cmNlL01GRS9wZWNvcy11aS1jb3JlLW1hc3Rlci9wZWNvcy11aS1jb3JlLW1hc3Rlci9zcmMvbGliLyIsInNvdXJjZXMiOlsic2VydmljZXMvYW5ub3VuY2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUczQjtRQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7O2dGQWhCVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBREgsTUFBTTtrREFDbkIsZ0JBQWdCO2NBRDVCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ub3VuY2VyU2VydmljZSB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZWwgPSAodGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBlbC5jbGFzc05hbWUgPSAnc3Itb25seSc7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG5cbiAgYW5ub3VuY2UodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuIl19