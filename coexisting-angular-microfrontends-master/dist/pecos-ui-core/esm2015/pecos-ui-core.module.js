import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth';
import * as Components from './components';
import * as Pipes from './pipes';
import * as i0 from "@angular/core";
import * as i1 from "./pipes/address.pipe";
import * as i2 from "./pipes/date-format.pipe";
import * as i3 from "./pipes/empty-dash.pipe";
import * as i4 from "./pipes/filter.pipe";
import * as i5 from "./pipes/full-name.pipe";
import * as i6 from "./pipes/highlight-keyword.pipe";
import * as i7 from "./pipes/phone-number.pipe";
import * as i8 from "./pipes/time-format.pipe";
import * as i9 from "./pipes/tin.pipe";
import * as i10 from "./pipes/title-case-extended.pipe";
import * as i11 from "./pipes/zip-code.pipe";
import * as i12 from "./components/pecos-ui/pecos-ui.component";
const components = [Components.PecosUiComponent];
const imports = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
];
const pipes = [
    Pipes.AddressPipe,
    Pipes.DateFormatPipe,
    Pipes.EmptyDashPipe,
    Pipes.FilterPipe,
    Pipes.FullNamePipe,
    Pipes.HighlightKeywordPipe,
    Pipes.PhoneNumberPipe,
    Pipes.TimeFormatPipe,
    Pipes.TinPipe,
    Pipes.TitleCaseExtendedPipe,
    Pipes.ZipCodePipe,
];
export class PecosUiCoreModule {
}
PecosUiCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: PecosUiCoreModule });
PecosUiCoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PecosUiCoreModule_Factory(t) { return new (t || PecosUiCoreModule)(); }, imports: [imports, CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PecosUiCoreModule, { declarations: [i1.AddressPipe, i2.DateFormatPipe, i3.EmptyDashPipe, i4.FilterPipe, i5.FullNamePipe, i6.HighlightKeywordPipe, i7.PhoneNumberPipe, i8.TimeFormatPipe, i9.TinPipe, i10.TitleCaseExtendedPipe, i11.ZipCodePipe, i12.PecosUiComponent], imports: [CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule], exports: [CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule, i1.AddressPipe, i2.DateFormatPipe, i3.EmptyDashPipe, i4.FilterPipe, i5.FullNamePipe, i6.HighlightKeywordPipe, i7.PhoneNumberPipe, i8.TimeFormatPipe, i9.TinPipe, i10.TitleCaseExtendedPipe, i11.ZipCodePipe, i12.PecosUiComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PecosUiCoreModule, [{
        type: NgModule,
        args: [{
                imports,
                declarations: [...pipes, ...components],
                exports: [...imports, ...pipes, ...components],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVjb3MtdWktY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiQzovc291cmNlL01GRS9wZWNvcy11aS1jb3JlLW1hc3Rlci9wZWNvcy11aS1jb3JlLW1hc3Rlci9zcmMvbGliLyIsInNvdXJjZXMiOlsicGVjb3MtdWktY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxLQUFLLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLE1BQU0sVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFakQsTUFBTSxPQUFPLEdBQUc7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtDQUNYLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRztJQUNaLEtBQUssQ0FBQyxXQUFXO0lBQ2pCLEtBQUssQ0FBQyxjQUFjO0lBQ3BCLEtBQUssQ0FBQyxhQUFhO0lBQ25CLEtBQUssQ0FBQyxVQUFVO0lBQ2hCLEtBQUssQ0FBQyxZQUFZO0lBQ2xCLEtBQUssQ0FBQyxvQkFBb0I7SUFDMUIsS0FBSyxDQUFDLGVBQWU7SUFDckIsS0FBSyxDQUFDLGNBQWM7SUFDcEIsS0FBSyxDQUFDLE9BQU87SUFDYixLQUFLLENBQUMscUJBQXFCO0lBQzNCLEtBQUssQ0FBQyxXQUFXO0NBQ2xCLENBQUM7QUFPRixNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBSjVCLE9BQU8sRUF0QlAsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFVBQVU7d0ZBc0JDLGlCQUFpQixpUUExQjVCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixVQUFVLGFBSlYsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFVBQVU7a0RBc0JDLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTztnQkFDUCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLFVBQVUsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxVQUFVLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgKiBhcyBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBQaXBlcyBmcm9tICcuL3BpcGVzJztcblxuY29uc3QgY29tcG9uZW50cyA9IFtDb21wb25lbnRzLlBlY29zVWlDb21wb25lbnRdO1xuXG5jb25zdCBpbXBvcnRzID0gW1xuICBDb21tb25Nb2R1bGUsXG4gIEZvcm1zTW9kdWxlLFxuICBIdHRwQ2xpZW50TW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBBdXRoTW9kdWxlLFxuXTtcblxuY29uc3QgcGlwZXMgPSBbXG4gIFBpcGVzLkFkZHJlc3NQaXBlLFxuICBQaXBlcy5EYXRlRm9ybWF0UGlwZSxcbiAgUGlwZXMuRW1wdHlEYXNoUGlwZSxcbiAgUGlwZXMuRmlsdGVyUGlwZSxcbiAgUGlwZXMuRnVsbE5hbWVQaXBlLFxuICBQaXBlcy5IaWdobGlnaHRLZXl3b3JkUGlwZSxcbiAgUGlwZXMuUGhvbmVOdW1iZXJQaXBlLFxuICBQaXBlcy5UaW1lRm9ybWF0UGlwZSxcbiAgUGlwZXMuVGluUGlwZSxcbiAgUGlwZXMuVGl0bGVDYXNlRXh0ZW5kZWRQaXBlLFxuICBQaXBlcy5aaXBDb2RlUGlwZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMsXG4gIGRlY2xhcmF0aW9uczogWy4uLnBpcGVzLCAuLi5jb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLmltcG9ydHMsIC4uLnBpcGVzLCAuLi5jb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgUGVjb3NVaUNvcmVNb2R1bGUge31cbiJdfQ==