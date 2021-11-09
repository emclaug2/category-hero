import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-category-hero',
    template: `
        <div class="app-category-hero-root">
            <div
                class="category-hero-header-background"
                [title]="imageAltText"
                [style.backgroundImage]="'url(' + backgroundImageUrl + ')'"
            ></div>
            <div class="category-hero-content">
                <div *ngIf="eyebrowText" class="category-hero-eyebrow">< {{ eyebrowText }}</div>
                <div class="category-hero-header-description-container">
                    <div class="category-hero-headerText-container">
                        <div *ngIf="headerText" class="category-hero-headerText">{{ headerText }}</div>
                        <div class="category-hero-underline"></div>
                    </div>
                    <div class="category-hero-descriptionText">{{ descriptionText }}</div>
                </div>
            </div>
        </div>
    `,
    host: {
        class: 'app-category-hero',
    },
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['category-hero.component.scss'],
})
export class CategoryHeroComponent {
    @Input() eyebrowText: string;
    @Input() imageAltText: string;
    @Input() headerText: string;
    @Input() descriptionText: string;
    @Input() backgroundImageUrl: string;
}
