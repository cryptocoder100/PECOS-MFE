import { DataService } from './data.service';
import { CodeReferenceDTO, ContractorGroupDTO, LineOfBusinessDTO, LineOfBusinessOptions, PecosFlagReferenceDTO, PecosReferenceDataDTO, PecosUserDTO, ProviderTypes, SpecialtyReferenceDTO } from './reference-data.models';
import * as i0 from "@angular/core";
export declare const sortByKey: (key: string) => (a: any, b: any) => 1 | 0 | -1;
export declare class ReferenceDataService {
    private dataService;
    private cache;
    constructor(dataService: DataService);
    private api;
    getByType(type: string): Promise<CodeReferenceDTO[]>;
    getDocumentTypeByCategory(categoryType?: string): Promise<CodeReferenceDTO[]>;
    getDocumentCategories(): Promise<CodeReferenceDTO[]>;
    getCountries(): Promise<CodeReferenceDTO[]>;
    getEvents(): Promise<CodeReferenceDTO[]>;
    getEventsByReferenceType(referenceType: string): Promise<CodeReferenceDTO[]>;
    getFlagTypes(): Promise<PecosFlagReferenceDTO[]>;
    getLineOfBusinessInfo(options: LineOfBusinessOptions): Promise<LineOfBusinessDTO | null>;
    getMacGroups(): Promise<ContractorGroupDTO[]>;
    getNameSuffixes(): Promise<{
        code: string;
        value: string;
    }[]>;
    getPecosUsers(): Promise<PecosUserDTO[]>;
    getSpecialties(): Promise<PecosReferenceDataDTO[]>;
    getSpecialtiesByFormType(formType: string, providerType?: ProviderTypes): Promise<SpecialtyReferenceDTO[]>;
    getSpecialtiesWithFormType(): Promise<SpecialtyReferenceDTO[]>;
    getStates(): Promise<CodeReferenceDTO[]>;
    getVehicleTypes(): Promise<CodeReferenceDTO[]>;
    getDispositionReasons(reasonType: string): Promise<CodeReferenceDTO[]>;
    fetchRfiCorrespondenceSection(applicationEnum: string): Promise<Array<any>>;
    static ɵfac: i0.ɵɵFactoryDef<ReferenceDataService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ReferenceDataService>;
}
//# sourceMappingURL=reference-data.service.d.ts.map