import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { InlineComponent } from './content/inline/inline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentbottomComponent } from './contentbottom/contentbottom.component';
import { Lesson20Component } from './content/lesson20/lesson20.component';
import { Lesson23Component } from './content/lesson23/lesson23.component';
import { TopcontentComponent } from './topcontent/topcontent.component';
import { Lesson25Component } from './topcontent/lesson25/lesson25.component';
import { Lesson26Component } from './topcontent/lesson26/lesson26.component';
import { Lesson27Component } from './topcontent/lesson27/lesson27.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    InlineComponent,
    NavbarComponent,
    FooterComponent,
    ContentbottomComponent,
    Lesson20Component,
    Lesson23Component,
    TopcontentComponent,
    Lesson25Component,
    Lesson26Component,
    Lesson27Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
