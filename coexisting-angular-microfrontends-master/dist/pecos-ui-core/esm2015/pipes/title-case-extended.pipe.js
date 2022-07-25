import { TitleCasePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TitleCaseExtendedPipe extends TitleCasePipe {
    constructor() {
        super();
    }
    transform(value, ...args) {
        if (!value)
            return null;
        let words = value.split(' ');
        for (var index = 0; index < words.length; index++) {
            var word = words[index];
            if (index > 0 && this.isAbbreviation(word)) {
                words[index] = word.toUpperCase();
            }
            else {
                words[index] = this.forSpecialCharacters(word);
            }
        }
        return words.join(' ');
    }
    isAbbreviation(word) {
        //this method will override any words you need full capitalized
        let upperCaseWords = ['II', 'III', 'IV']; // add more words to include here, currently suffixes
        return upperCaseWords.includes(word.toUpperCase());
    }
    forSpecialCharacters(str) {
        //this method will uppercase letters after a hyphen or slash or whitespace
        return str.toLowerCase().replace(/(?:^|\s|\/|\-|\()\w/g, function (match) {
            return match.toUpperCase();
        });
    }
}
TitleCaseExtendedPipe.ɵfac = function TitleCaseExtendedPipe_Factory(t) { return new (t || TitleCaseExtendedPipe)(); };
TitleCaseExtendedPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "titleCaseExtended", type: TitleCaseExtendedPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleCaseExtendedPipe, [{
        type: Pipe,
        args: [{ name: 'titleCaseExtended' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtY2FzZS1leHRlbmRlZC5waXBlLmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbInBpcGVzL3RpdGxlLWNhc2UtZXh0ZW5kZWQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxxQkFDWCxTQUFRLGFBQWE7SUFHckI7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLEdBQUcsSUFBVztRQUNsQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25DO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sY0FBYyxDQUFDLElBQVk7UUFDakMsK0RBQStEO1FBQy9ELElBQUksY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHFEQUFxRDtRQUMvRixPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLG9CQUFvQixDQUFDLEdBQUc7UUFDOUIsMEVBQTBFO1FBQzFFLE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEtBQUs7WUFDdEUsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswRkFqQ1UscUJBQXFCO2lGQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAndGl0bGVDYXNlRXh0ZW5kZWQnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVDYXNlRXh0ZW5kZWRQaXBlXG4gIGV4dGVuZHMgVGl0bGVDYXNlUGlwZVxuICBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHdvcmRzID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgd29yZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgd29yZCA9IHdvcmRzW2luZGV4XTtcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgdGhpcy5pc0FiYnJldmlhdGlvbih3b3JkKSkge1xuICAgICAgICB3b3Jkc1tpbmRleF0gPSB3b3JkLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b3Jkc1tpbmRleF0gPSB0aGlzLmZvclNwZWNpYWxDaGFyYWN0ZXJzKHdvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FiYnJldmlhdGlvbih3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvL3RoaXMgbWV0aG9kIHdpbGwgb3ZlcnJpZGUgYW55IHdvcmRzIHlvdSBuZWVkIGZ1bGwgY2FwaXRhbGl6ZWRcbiAgICBsZXQgdXBwZXJDYXNlV29yZHMgPSBbJ0lJJywgJ0lJSScsICdJViddOyAvLyBhZGQgbW9yZSB3b3JkcyB0byBpbmNsdWRlIGhlcmUsIGN1cnJlbnRseSBzdWZmaXhlc1xuICAgIHJldHVybiB1cHBlckNhc2VXb3Jkcy5pbmNsdWRlcyh3b3JkLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JTcGVjaWFsQ2hhcmFjdGVycyhzdHIpIHtcbiAgICAvL3RoaXMgbWV0aG9kIHdpbGwgdXBwZXJjYXNlIGxldHRlcnMgYWZ0ZXIgYSBoeXBoZW4gb3Igc2xhc2ggb3Igd2hpdGVzcGFjZVxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oPzpefFxcc3xcXC98XFwtfFxcKClcXHcvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19