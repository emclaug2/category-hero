/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CategoryHeroComponent } from './components/category-hero/category-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, CategoryHeroComponent],
    imports: [BrowserModule, CommonModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
