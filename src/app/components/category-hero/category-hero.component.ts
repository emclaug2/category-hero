import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-hero',
    template: `
      Category Hero!
    `,
    styleUrls: ['category-hero.component.scss'],
})
export class CategoryHeroComponent {
    @Input() size: number;
    @Input() color: string;
}
