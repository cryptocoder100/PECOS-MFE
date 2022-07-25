import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class HighlightKeywordPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(list, searchText, type) {
        if (!list) {
            return '';
        }
        if (!searchText ||
            searchText.indexOf('*') === 0 ||
            list === '-' ||
            type !== 'search') {
            return list;
        }
        const sText = searchText.trim();
        const sList = list && list.toString();
        const regex = new RegExp(sText, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        const value = sList.replace(regex, '<span style="background-color:#FFF3BD">$&</span>');
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
}
HighlightKeywordPipe.ɵfac = function HighlightKeywordPipe_Factory(t) { return new (t || HighlightKeywordPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
HighlightKeywordPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlightKeyword", type: HighlightKeywordPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighlightKeywordPipe, [{
        type: Pipe,
        args: [{
                name: 'highlightKeyword',
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LWtleXdvcmQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJwaXBlcy9oaWdobGlnaHQta2V5d29yZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFNcEQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQUcsQ0FBQztJQUVoRCxTQUFTLENBQUMsSUFBUyxFQUFFLFVBQWUsRUFBRSxJQUFTO1FBQzdDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFDRSxDQUFDLFVBQVU7WUFDWCxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxLQUFLLEdBQUc7WUFDWixJQUFJLEtBQUssUUFBUSxFQUNqQjtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyx3RkFBd0Y7UUFDL0gsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FDekIsS0FBSyxFQUNMLGtEQUFrRCxDQUNuRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7O3dGQXZCVSxvQkFBb0I7K0VBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBSGhDLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2hpZ2hsaWdodEtleXdvcmQnLFxufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRLZXl3b3JkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0obGlzdDogYW55LCBzZWFyY2hUZXh0OiBhbnksIHR5cGU6IGFueSk6IGFueSB7XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICFzZWFyY2hUZXh0IHx8XG4gICAgICBzZWFyY2hUZXh0LmluZGV4T2YoJyonKSA9PT0gMCB8fFxuICAgICAgbGlzdCA9PT0gJy0nIHx8XG4gICAgICB0eXBlICE9PSAnc2VhcmNoJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIGNvbnN0IHNUZXh0ID0gc2VhcmNoVGV4dC50cmltKCk7XG4gICAgY29uc3Qgc0xpc3QgPSBsaXN0ICYmIGxpc3QudG9TdHJpbmcoKTtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc1RleHQsICdnaScpOyAvLydnaScgZm9yIGNhc2UgaW5zZW5zaXRpdmUgYW5kIGNhbiB1c2UgJ2cnIGlmIHlvdSB3YW50IHRoZSBzZWFyY2ggdG8gYmUgY2FzZSBzZW5zaXRpdmUuXG4gICAgY29uc3QgdmFsdWUgPSBzTGlzdC5yZXBsYWNlKFxuICAgICAgcmVnZXgsXG4gICAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkYzQkRcIj4kJjwvc3Bhbj4nXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxufVxuIl19