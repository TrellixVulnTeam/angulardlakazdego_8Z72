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
import { Lesson34Component } from './content/lesson34/lesson34.component';
import { Lesson35parrentComponent } from './content/lesson35parrent/lesson35parrent.component';
import { Lesson35child1Component } from './content/lesson35parrent/lesson35child1/lesson35child1.component';
import { Lesson35child2Component } from './content/lesson35parrent/lesson35child2/lesson35child2.component';
import { Lesson34newComponent } from './content/lesson34/lesson34new/lesson34new.component';
import { Component1Component } from './content/lesson34/lesson34new/component1/component1.component';
import { Lesson40Component } from './content/lesson40/lesson40.component';
import { Lesson41Component } from './content/lesson41/lesson41.component';
import { Lesson41Child1Component } from './content/lesson41/lesson41-child1/lesson41-child1.component';
import { Lesson39Component } from './content/lesson39/lesson39.component';
import { Lesson39ChildComponent } from './content/lesson39/lesson39-child/lesson39-child.component';
import { CommunicationComponent } from './tests/communication/communication.component';
import { TestsComponent } from './tests/tests.component';

import { ComChild1Component } from './tests/communication/com-child1/com-child1.component';
import { ComChild2Component } from './tests/communication/com-child2/com-child2.component';
import { ComChild3Component } from './tests/communication/com-child3/com-child3.component';
import { Lesson43Component } from './content/lesson43/lesson43.component';
import { Lesson43ChildComponent } from './content/lesson43/lesson43-child/lesson43-child.component';
import { NewangularComponent } from './content/newangular/newangular.component';





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
    Lesson34Component,
    Lesson35parrentComponent,
    Lesson35child1Component,
    Lesson35child2Component,
    Lesson34newComponent,
    Component1Component,
    Lesson40Component,
    Lesson41Component,
    Lesson41Child1Component,
    Lesson39Component,
    Lesson39ChildComponent,
    CommunicationComponent,
    TestsComponent,
    ComChild1Component,
    ComChild2Component,
    ComChild3Component,
    Lesson43Component,
    Lesson43ChildComponent,
    NewangularComponent,

   
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
