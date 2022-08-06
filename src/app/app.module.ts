import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgChartsModule } from 'ng2-charts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GradebooklistComponent } from './components/gradebooklist/gradebooklist.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamdetailsComponent } from './components/teamdetails/teamdetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { StudentSearchFilterPipe } from './student-search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GradebooklistComponent,
    StatisticsComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    TeamdetailsComponent,
    PagenotfoundComponent,
    StudentdetailsComponent,
    StudentSearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    NgChartsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
