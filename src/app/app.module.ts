import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { Lesson29Component } from './content/lesson29/lesson29.component';
import { Lesson30Component } from './content/lesson30/lesson30.component';
import { Lesson31Component } from './content/lesson31/lesson31.component';
import { Lesson32Component } from './content/lesson32/lesson32.component';

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
    Lesson29Component,
    Lesson30Component,
    Lesson31Component,
    Lesson32Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
