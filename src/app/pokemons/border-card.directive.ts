import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[pkmnBorderCard]' // directive d'attribut grace à [nomDirective]
})

export class BorderCardDirective {
    constructor(private el: ElementRef) { // paramètre : référence vers attribut HTML
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard') borderColor: string; //  <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmnBorderCard='red'>
    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeight: number = 180;

    @HostListener('mouseenter') onMouseEnter() { // la souris entre dans l'élément géré par la directive grace à @HostListener('mouseenter')
        // <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmnBorderCard='red'> 
        this.setBorder(this.borderColor || this.defaultColor); // borderColor ou '#009688' si non renseigné
    }

    @HostListener('mouseleave') onMouseLeave() { // la souris sort de l'élément géré par la directive grace à @HostListener('mouseleave')
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        const border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}
