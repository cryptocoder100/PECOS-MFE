export interface CodeReferenceDTO {
    code: string;
    id: number;
    referenceType: string;
    value: string;
    subCode?: string;
}
export interface CodeReferenceDTOList {
    codeReferenceDTOList: CodeReferenceDTO[];
}
export interface ContractorGroupDTO {
    code: string;
    value: string;
}
export interface ContractorGroupDTOList {
    contractorGroupDTOList: ContractorGroupDTO[];
}
export interface ContractorGroupResponse {
    _embedded: ContractorGroupDTOList;
}
export interface DispositionReasonsDTO {
    conceptReasonCategory: string;
    conceptReasonSubtype: string;
    conceptReasonSubtypeDesc: string;
    conceptReasonType: string;
    conceptReasonTypeDesc: string;
    conceptType: string;
}
export interface LineOfBusinessOptions {
    formType: string;
    physicianInd?: string;
    specialtyCode?: string;
}
export interface LineOfBusinessDTO {
    formTypeCode: string;
    lobCode: string;
    lobId: number;
    specialtyRefCode: string;
    specialtyRefId: string;
}
export interface PecosFlagReferenceDTO {
    checked: string;
    col: string;
    flagDesc: string;
    id: number;
    label: string;
    value: string;
}
export interface PecosFlagReferenceDTOList {
    pecosFlagReferenceDTOList: PecosFlagReferenceDTO[];
}
export interface PecosFlagsTypeResponse {
    _embedded: PecosFlagReferenceDTOList;
}
export interface PecosReferenceDataDTO {
    codeDescription: string;
    codeText: string;
    fissAttendRenderExportInd?: string;
    fissOcpExportInd?: string;
    ocpExportInd?: string;
    ocpSpecialtyInd?: string;
    optOutEligibilityInd?: string;
    partBOcpExportInd?: string;
    partBOcpSupplierExportInd?: string;
    phyInd?: string;
    pmdSpecialtyInd?: string;
    referenceId: number;
    referenceType: string;
    supplierInd?: string;
}
export interface PecosReferenceDataDTOList {
    pecosReferenceDataDTOList: PecosReferenceDataDTO[];
}
export interface PecosReferenceDataResponse {
    _embedded: PecosReferenceDataDTOList;
}
export interface PecosUserDTO {
    cmsUserId: string;
    firstName: string;
    fullName: string;
    lastName: string;
    middleName: string;
    pecosUserId: number;
}
export interface PecosUserDTOList {
    pecosUserDTOList: PecosUserDTO[];
}
export interface PecosUsersResponse {
    _embedded: PecosUserDTOList;
}
export declare type ProviderTypes = 'NA' | 'Y' | 'N';
export interface ReferenceByTypeResponse {
    _embedded: CodeReferenceDTOList;
}
export interface SpecialtyReferenceDTO {
    formTypeCode: string;
    physicianInd: string;
    specialtyReferenceCode: string;
    specialtyReferenceDesc: string;
    specialtyReferenceId: string;
}
export interface SpecialtyReferenceDTOList {
    specialtyReferenceDTOList: SpecialtyReferenceDTO[];
}
export interface SpecialtyReferenceResponse {
    _embedded: SpecialtyReferenceDTOList;
}
//# sourceMappingURL=reference-data.models.d.ts.map