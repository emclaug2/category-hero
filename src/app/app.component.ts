import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    backgroundUrl = 'sunrise.jpg';
    mobileView = false;
    previousRoute = 'Company';
    imageAltText = 'Green sustainable field with sunbeams and mountains';
    headerText = 'We make a healthy planet work*';
    descriptionText = `*Whether it's using more energy efficient products or harnessing low carbon and renewable resources like solar, wind and hydroelectric power. Around the world, we're helping major industries lower emissions an duse less fuel.`;
}
