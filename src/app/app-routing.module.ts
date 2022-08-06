import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GradebooklistComponent } from './components/gradebooklist/gradebooklist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TeamdetailsComponent } from './components/teamdetails/teamdetails.component';


const routes: Routes = [
  { path: '', component: GradebooklistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teamDetails', component: TeamdetailsComponent },
  { path: 'gradebook', component: GradebooklistComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
