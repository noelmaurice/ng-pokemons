import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let BorderCardDirective = class BorderCardDirective {
    constructor(el) {
        this.el = el;
        this.initialColor = '#f5f5f5';
        this.defaultColor = '#009688';
        this.defaultHeight = 180;
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }
    onMouseEnter() {
        // <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmnBorderCard='red'> 
        this.setBorder(this.borderColor || this.defaultColor); // borderColor ou '#009688' si non renseigné
    }
    onMouseLeave() {
        this.setBorder(this.initialColor);
    }
    setBorder(color) {
        const border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
    setHeight(height) {
        this.el.nativeElement.style.height = height + 'px';
    }
};
tslib_1.__decorate([
    Input('pkmnBorderCard')
], BorderCardDirective.prototype, "borderColor", void 0);
tslib_1.__decorate([
    HostListener('mouseenter')
], BorderCardDirective.prototype, "onMouseEnter", null);
tslib_1.__decorate([
    HostListener('mouseleave')
], BorderCardDirective.prototype, "onMouseLeave", null);
BorderCardDirective = tslib_1.__decorate([
    Directive({
        selector: '[pkmnBorderCard]' // directive d'attribut grace à [nomDirective]
    })
], BorderCardDirective);
export { BorderCardDirective };
//# sourceMappingURL=border-card.directive.js.map