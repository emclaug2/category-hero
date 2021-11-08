import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-category-hero',
    template: `
        <div class="app-category-hero-root" [class.isMobile]="mobileView">
            <div
                class="category-hero-header-background"
                [title]="imageAltText"
                [style.backgroundImage]="'url(' + backgroundImageUrl + ')'"
            ></div>
            <div class="category-hero-text-container">
                <div *ngIf="previousRoute" class="previous-route">< {{ previousRoute }}</div>
                <div class="category-hero-header-description-container">
                    <div>
                        <h1 *ngIf="headerText" class="header-text">{{ headerText }}</h1>
                        <div class="category-hero-underline"></div>
                    </div>
                    <div class="description-text">{{ descriptionText }}</div>
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
    @Input() previousRoute: string;
    @Input() imageAltText: string;
    @Input() headerText: string;
    @Input() descriptionText: string;
    @Input() backgroundImageUrl: string;

    @Input() mobileView: boolean;
}
