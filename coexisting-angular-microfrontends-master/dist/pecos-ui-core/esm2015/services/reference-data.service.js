import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./data.service";
export const sortByKey = (key) => (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
export class ReferenceDataService {
    constructor(dataService) {
        this.dataService = dataService;
        this.cache = {};
    }
    api(path = '/referenceData') {
        return this.dataService.api(`/reference${path}`).toPromise();
    }
    getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache[type];
                if (!list) {
                    const data = yield this.api(`/referenceByType/${type}`);
                    list = data._embedded.codeReferenceDTOList;
                    list.sort(sortByKey('value'));
                    this.cache[type] = list;
                }
                return [...list]; // return a copy
            }
            catch (e) {
                return [];
            }
        });
    }
    getDocumentTypeByCategory(categoryType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache[categoryType];
                if (!list) {
                    const data = yield this.api(`/reference/documentType/${categoryType || ''}`);
                    list = data;
                    list.sort(sortByKey('code'));
                    this.cache[categoryType] = list;
                }
                return [...list]; // return a copy
            }
            catch (e) {
                return [];
            }
        });
    }
    getDocumentCategories() {
        return this.getByType('Document Category');
    }
    getCountries() {
        return this.getByType('Country Code');
    }
    getEvents() {
        return this.getByType('event');
    }
    getEventsByReferenceType(referenceType) {
        return this.getByType(`event/${referenceType}`);
    }
    getFlagTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.flagTypes;
                if (!list) {
                    const data = yield this.api('/flagTypes');
                    list = data._embedded.pecosFlagReferenceDTOList;
                    list.sort(sortByKey('label'));
                    this.cache.flagTypes = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getLineOfBusinessInfo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { formType, physicianInd = '', specialtyCode = '' } = options;
            if (!formType) {
                throw new Error(`formType must be supplied.`);
            }
            const cacheKey = ['lob', ...Object.values(options)].join('-');
            try {
                let data = this.cache[cacheKey];
                if (!data) {
                    const qs = `physicianInd=${physicianInd}&specialtyCode=${specialtyCode}`;
                    data = yield this.api(`/getFormLineOfBusinessInfo/${formType}?${qs}`);
                    this.cache[cacheKey] = data;
                }
                return data;
            }
            catch (e) {
                return null;
            }
        });
    }
    getMacGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.macGroups;
                if (!list) {
                    const data = yield this.api('/macGroups');
                    list = data._embedded.contractorGroupDTOList;
                    list.sort(sortByKey('value'));
                    this.cache.macGroups = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getNameSuffixes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.nameSuffixes;
                if (!list) {
                    // TODO: actually use /api if one becomes available
                    list = [
                        { code: 'JR', value: 'Jr.' },
                        { code: 'SR', value: 'Sr.' },
                        { code: 'II', value: 'II' },
                        { code: 'III', value: 'III' },
                        { code: 'IV', value: 'IV' },
                        { code: 'N/A', value: 'N/A' },
                    ];
                    this.cache.nameSuffixes = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getPecosUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.pecosUsers;
                if (!list) {
                    const data = yield this.api('/pecosUser');
                    list = data._embedded.pecosUserDTOList;
                    list.sort(sortByKey('cmsUserId'));
                    this.cache.pecosUsers = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialties() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.specialties;
                if (!list) {
                    const data = yield this.api('/referenceData/specialties');
                    list = data._embedded.pecosReferenceDataDTOList;
                    list.sort(sortByKey('codeDescription'));
                    this.cache.specialties = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialtiesByFormType(formType, providerType = 'NA') {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `specialties-${formType}-${providerType}`;
            try {
                let list = this.cache[cacheKey];
                if (!list) {
                    const data = yield this.api(`/specialtyRef/${formType}/${providerType}`);
                    list = data._embedded.specialtyReferenceDTOList;
                    list.sort(sortByKey('specialtyReferenceDesc'));
                    this.cache[cacheKey] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialtiesWithFormType() {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `specialties-with-form-type`;
            try {
                let list = this.cache[cacheKey];
                if (!list) {
                    const data = yield this.api(`/referenceByType/specialties`);
                    list = data._embedded.specialtyReferenceDTOList;
                    list.sort(sortByKey('specialtyReferenceDesc'));
                    this.cache[cacheKey] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getStates() {
        return this.getByType('State Code');
    }
    getVehicleTypes() {
        return this.getByType('Vehicle Type');
    }
    getDispositionReasons(reasonType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.cache.dispositionReasons) {
                    this.cache.dispositionReasons = [];
                }
                let list = this.cache.dispositionReasons[reasonType];
                if (!list) {
                    const data = yield this.api(`/disposition-reason/${reasonType}`);
                    list = data;
                    list.sort(sortByKey('conceptReasonSubtype'));
                    this.cache.dispositionReasons[reasonType] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    fetchRfiCorrespondenceSection(applicationEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = 'rfi' + applicationEnum;
            try {
                if (!this.cache[cacheKey]) {
                    this.cache[cacheKey] = [];
                }
                let list = this.cache[cacheKey];
                if (list.length === 0) {
                    const csData = yield this.dataService.api('/content/rfiCorrespondenceSections/' + applicationEnum).toPromise();
                    this.cache[cacheKey] = csData;
                    list = csData;
                }
                return list;
            }
            catch (e) {
                return [];
            }
        });
    }
}
ReferenceDataService.ɵfac = function ReferenceDataService_Factory(t) { return new (t || ReferenceDataService)(i0.ɵɵinject(i1.DataService)); };
ReferenceDataService.ɵprov = i0.ɵɵdefineInjectable({ token: ReferenceDataService, factory: ReferenceDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReferenceDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.DataService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yZWZlcmVuY2UtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFxQjNDLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUUsQ0FDM0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBS2pELE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGcEMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUV1QixDQUFDO0lBRXhDLEdBQUcsQ0FBSSxJQUFJLEdBQUcsZ0JBQWdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUksYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7SUFFSyxTQUFTLENBQUMsSUFBWTs7WUFDMUIsSUFBSTtnQkFDRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FD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O0tBQUE7O3dGQTVQVSxvQkFBb0I7NERBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLE1BQU07a0RBRVAsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL2RhdGEuc2VydmljZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvZGVSZWZlcmVuY2VEVE8sXHJcbiAgQ29udHJhY3Rvckdyb3VwRFRPLFxyXG4gIENvbnRyYWN0b3JHcm91cFJlc3BvbnNlLFxyXG4gIExpbmVPZkJ1c2luZXNzRFRPLFxyXG4gIExpbmVPZkJ1c2luZXNzT3B0aW9ucyxcclxuICBSZWZlcmVuY2VCeVR5cGVSZXNwb25zZSxcclxuICBQZWNvc0ZsYWdSZWZlcmVuY2VEVE8sXHJcbiAgUGVjb3NGbGFnc1R5cGVSZXNwb25zZSxcclxuICBQZWNvc1JlZmVyZW5jZURhdGFEVE8sXHJcbiAgUGVjb3NSZWZlcmVuY2VEYXRhUmVzcG9uc2UsXHJcbiAgUGVjb3NVc2VyRFRPLFxyXG4gIFBlY29zVXNlcnNSZXNwb25zZSxcclxuICBQcm92aWRlclR5cGVzLFxyXG4gIFNwZWNpYWx0eVJlZmVyZW5jZURUTyxcclxuICBTcGVjaWFsdHlSZWZlcmVuY2VSZXNwb25zZSxcclxufSBmcm9tICcuL3JlZmVyZW5jZS1kYXRhLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydEJ5S2V5ID0gKGtleTogc3RyaW5nKSA9PiAoYTogYW55LCBiOiBhbnkpID0+XHJcbiAgYVtrZXldID4gYltrZXldID8gMSA6IGFba2V5XSA8IGJba2V5XSA/IC0xIDogMDtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VEYXRhU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjYWNoZTogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIGFwaTxUPihwYXRoID0gJy9yZWZlcmVuY2VEYXRhJyk6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuYXBpPFQ+KGAvcmVmZXJlbmNlJHtwYXRofWApLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8Q29kZVJlZmVyZW5jZURUT1tdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY2FjaGVbdHlwZV07XHJcbiAgICAgIGlmICghbGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxSZWZlcmVuY2VCeVR5cGVSZXNwb25zZT4oXHJcbiAgICAgICAgICBgL3JlZmVyZW5jZUJ5VHlwZS8ke3R5cGV9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGlzdCA9IGRhdGEuX2VtYmVkZGVkLmNvZGVSZWZlcmVuY2VEVE9MaXN0O1xyXG4gICAgICAgIGxpc3Quc29ydChzb3J0QnlLZXkoJ3ZhbHVlJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbdHlwZV0gPSBsaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbLi4ubGlzdF07IC8vIHJldHVybiBhIGNvcHlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0RG9jdW1lbnRUeXBlQnlDYXRlZ29yeShjYXRlZ29yeVR5cGU/OiBzdHJpbmcpOiBQcm9taXNlPENvZGVSZWZlcmVuY2VEVE9bXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhY2hlW2NhdGVnb3J5VHlwZV07XHJcbiAgICAgIGlmICghbGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxDb2RlUmVmZXJlbmNlRFRPW10+KFxyXG4gICAgICAgICAgYC9yZWZlcmVuY2UvZG9jdW1lbnRUeXBlLyR7Y2F0ZWdvcnlUeXBlfHwnJ31gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaXN0ID0gZGF0YTtcclxuICAgICAgICBsaXN0LnNvcnQoc29ydEJ5S2V5KCdjb2RlJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbY2F0ZWdvcnlUeXBlXSA9IGxpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5saXN0XTsgLy8gcmV0dXJuIGEgY29weVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREb2N1bWVudENhdGVnb3JpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCeVR5cGUoJ0RvY3VtZW50IENhdGVnb3J5Jyk7XHJcbiAgfVxyXG5cclxuICBnZXRDb3VudHJpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCeVR5cGUoJ0NvdW50cnkgQ29kZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXZlbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QnlUeXBlKCdldmVudCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXZlbnRzQnlSZWZlcmVuY2VUeXBlKHJlZmVyZW5jZVR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QnlUeXBlKGBldmVudC8ke3JlZmVyZW5jZVR5cGV9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRGbGFnVHlwZXMoKTogUHJvbWlzZTxQZWNvc0ZsYWdSZWZlcmVuY2VEVE9bXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhY2hlLmZsYWdUeXBlcztcclxuICAgICAgaWYgKCFsaXN0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXBpPFBlY29zRmxhZ3NUeXBlUmVzcG9uc2U+KCcvZmxhZ1R5cGVzJyk7XHJcbiAgICAgICAgbGlzdCA9IGRhdGEuX2VtYmVkZGVkLnBlY29zRmxhZ1JlZmVyZW5jZURUT0xpc3Q7XHJcbiAgICAgICAgbGlzdC5zb3J0KHNvcnRCeUtleSgnbGFiZWwnKSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5mbGFnVHlwZXMgPSBsaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbLi4ubGlzdF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExpbmVPZkJ1c2luZXNzSW5mbyhcclxuICAgIG9wdGlvbnM6IExpbmVPZkJ1c2luZXNzT3B0aW9uc1xyXG4gICk6IFByb21pc2U8TGluZU9mQnVzaW5lc3NEVE8gfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IGZvcm1UeXBlLCBwaHlzaWNpYW5JbmQgPSAnJywgc3BlY2lhbHR5Q29kZSA9ICcnIH0gPSBvcHRpb25zO1xyXG4gICAgaWYgKCFmb3JtVHlwZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGZvcm1UeXBlIG11c3QgYmUgc3VwcGxpZWQuYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYWNoZUtleSA9IFsnbG9iJywgLi4uT2JqZWN0LnZhbHVlcyhvcHRpb25zKV0uam9pbignLScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhY2hlW2NhY2hlS2V5XTtcclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcXMgPSBgcGh5c2ljaWFuSW5kPSR7cGh5c2ljaWFuSW5kfSZzcGVjaWFsdHlDb2RlPSR7c3BlY2lhbHR5Q29kZX1gO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxMaW5lT2ZCdXNpbmVzc0RUTz4oXHJcbiAgICAgICAgICBgL2dldEZvcm1MaW5lT2ZCdXNpbmVzc0luZm8vJHtmb3JtVHlwZX0/JHtxc31gXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNhY2hlW2NhY2hlS2V5XSA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TWFjR3JvdXBzKCk6IFByb21pc2U8Q29udHJhY3Rvckdyb3VwRFRPW10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5jYWNoZS5tYWNHcm91cHM7XHJcbiAgICAgIGlmICghbGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxDb250cmFjdG9yR3JvdXBSZXNwb25zZT4oJy9tYWNHcm91cHMnKTtcclxuICAgICAgICBsaXN0ID0gZGF0YS5fZW1iZWRkZWQuY29udHJhY3Rvckdyb3VwRFRPTGlzdDtcclxuICAgICAgICBsaXN0LnNvcnQoc29ydEJ5S2V5KCd2YWx1ZScpKTtcclxuICAgICAgICB0aGlzLmNhY2hlLm1hY0dyb3VwcyA9IGxpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5saXN0XTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TmFtZVN1ZmZpeGVzKCk6IFByb21pc2U8eyBjb2RlOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY2FjaGUubmFtZVN1ZmZpeGVzO1xyXG4gICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICAvLyBUT0RPOiBhY3R1YWxseSB1c2UgL2FwaSBpZiBvbmUgYmVjb21lcyBhdmFpbGFibGVcclxuICAgICAgICBsaXN0ID0gW1xyXG4gICAgICAgICAgeyBjb2RlOiAnSlInLCB2YWx1ZTogJ0pyLicgfSxcclxuICAgICAgICAgIHsgY29kZTogJ1NSJywgdmFsdWU6ICdTci4nIH0sXHJcbiAgICAgICAgICB7IGNvZGU6ICdJSScsIHZhbHVlOiAnSUknIH0sXHJcbiAgICAgICAgICB7IGNvZGU6ICdJSUknLCB2YWx1ZTogJ0lJSScgfSxcclxuICAgICAgICAgIHsgY29kZTogJ0lWJywgdmFsdWU6ICdJVicgfSxcclxuICAgICAgICAgIHsgY29kZTogJ04vQScsIHZhbHVlOiAnTi9BJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jYWNoZS5uYW1lU3VmZml4ZXMgPSBsaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbLi4ubGlzdF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFBlY29zVXNlcnMoKTogUHJvbWlzZTxQZWNvc1VzZXJEVE9bXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhY2hlLnBlY29zVXNlcnM7XHJcbiAgICAgIGlmICghbGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxQZWNvc1VzZXJzUmVzcG9uc2U+KCcvcGVjb3NVc2VyJyk7XHJcbiAgICAgICAgbGlzdCA9IGRhdGEuX2VtYmVkZGVkLnBlY29zVXNlckRUT0xpc3Q7XHJcbiAgICAgICAgbGlzdC5zb3J0KHNvcnRCeUtleSgnY21zVXNlcklkJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUucGVjb3NVc2VycyA9IGxpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5saXN0XTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0U3BlY2lhbHRpZXMoKTogUHJvbWlzZTxQZWNvc1JlZmVyZW5jZURhdGFEVE9bXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGxpc3QgPSB0aGlzLmNhY2hlLnNwZWNpYWx0aWVzO1xyXG4gICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hcGk8UGVjb3NSZWZlcmVuY2VEYXRhUmVzcG9uc2U+KFxyXG4gICAgICAgICAgJy9yZWZlcmVuY2VEYXRhL3NwZWNpYWx0aWVzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGlzdCA9IGRhdGEuX2VtYmVkZGVkLnBlY29zUmVmZXJlbmNlRGF0YURUT0xpc3Q7XHJcbiAgICAgICAgbGlzdC5zb3J0KHNvcnRCeUtleSgnY29kZURlc2NyaXB0aW9uJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUuc3BlY2lhbHRpZXMgPSBsaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbLi4ubGlzdF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFNwZWNpYWx0aWVzQnlGb3JtVHlwZShcclxuICAgIGZvcm1UeXBlOiBzdHJpbmcsXHJcbiAgICBwcm92aWRlclR5cGU6IFByb3ZpZGVyVHlwZXMgPSAnTkEnXHJcbiAgKTogUHJvbWlzZTxTcGVjaWFsdHlSZWZlcmVuY2VEVE9bXT4ge1xyXG4gICAgY29uc3QgY2FjaGVLZXkgPSBgc3BlY2lhbHRpZXMtJHtmb3JtVHlwZX0tJHtwcm92aWRlclR5cGV9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5jYWNoZVtjYWNoZUtleV07XHJcbiAgICAgIGlmICghbGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwaTxTcGVjaWFsdHlSZWZlcmVuY2VSZXNwb25zZT4oXHJcbiAgICAgICAgICBgL3NwZWNpYWx0eVJlZi8ke2Zvcm1UeXBlfS8ke3Byb3ZpZGVyVHlwZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaXN0ID0gZGF0YS5fZW1iZWRkZWQuc3BlY2lhbHR5UmVmZXJlbmNlRFRPTGlzdDtcclxuICAgICAgICBsaXN0LnNvcnQoc29ydEJ5S2V5KCdzcGVjaWFsdHlSZWZlcmVuY2VEZXNjJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbY2FjaGVLZXldID0gbGlzdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLmxpc3RdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRTcGVjaWFsdGllc1dpdGhGb3JtVHlwZSgpOiBQcm9taXNlPFNwZWNpYWx0eVJlZmVyZW5jZURUT1tdPiB7XHJcbiAgICBjb25zdCBjYWNoZUtleSA9IGBzcGVjaWFsdGllcy13aXRoLWZvcm0tdHlwZWA7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY2FjaGVbY2FjaGVLZXldO1xyXG4gICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hcGk8U3BlY2lhbHR5UmVmZXJlbmNlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgYC9yZWZlcmVuY2VCeVR5cGUvc3BlY2lhbHRpZXNgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaXN0ID0gZGF0YS5fZW1iZWRkZWQuc3BlY2lhbHR5UmVmZXJlbmNlRFRPTGlzdDtcclxuICAgICAgICBsaXN0LnNvcnQoc29ydEJ5S2V5KCdzcGVjaWFsdHlSZWZlcmVuY2VEZXNjJykpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbY2FjaGVLZXldID0gbGlzdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLmxpc3RdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRCeVR5cGUoJ1N0YXRlIENvZGUnKTtcclxuICB9XHJcblxyXG4gIGdldFZlaGljbGVUeXBlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEJ5VHlwZSgnVmVoaWNsZSBUeXBlJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREaXNwb3NpdGlvblJlYXNvbnMocmVhc29uVHlwZTogc3RyaW5nKTogUHJvbWlzZTxDb2RlUmVmZXJlbmNlRFRPW10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdGhpcy5jYWNoZS5kaXNwb3NpdGlvblJlYXNvbnMpIHtcclxuICAgICAgICB0aGlzLmNhY2hlLmRpc3Bvc2l0aW9uUmVhc29ucyA9IFtdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY2FjaGUuZGlzcG9zaXRpb25SZWFzb25zW3JlYXNvblR5cGVdO1xyXG4gICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hcGk8Q29kZVJlZmVyZW5jZURUT1tdPihcclxuICAgICAgICAgIGAvZGlzcG9zaXRpb24tcmVhc29uLyR7cmVhc29uVHlwZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaXN0ID0gZGF0YTtcclxuICAgICAgICBsaXN0LnNvcnQoc29ydEJ5S2V5KCdjb25jZXB0UmVhc29uU3VidHlwZScpKTtcclxuICAgICAgICB0aGlzLmNhY2hlLmRpc3Bvc2l0aW9uUmVhc29uc1tyZWFzb25UeXBlXSA9IGxpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5saXN0XTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hSZmlDb3JyZXNwb25kZW5jZVNlY3Rpb24oYXBwbGljYXRpb25FbnVtOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PGFueT4+IHtcclxuICAgIGNvbnN0IGNhY2hlS2V5ID0gJ3JmaScgKyBhcHBsaWNhdGlvbkVudW07XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRoaXMuY2FjaGVbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVtjYWNoZUtleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY2FjaGVbY2FjaGVLZXldO1xyXG5cclxuICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBjb25zdCBjc0RhdGEgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLmFwaShcclxuICAgICAgICAgICcvY29udGVudC9yZmlDb3JyZXNwb25kZW5jZVNlY3Rpb25zLycgKyBhcHBsaWNhdGlvbkVudW1cclxuICAgICAgICApLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbY2FjaGVLZXldID0gY3NEYXRhO1xyXG4gICAgICAgIGxpc3QgPSBjc0RhdGE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19