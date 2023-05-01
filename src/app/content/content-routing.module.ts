import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { ComiteeComponent } from './comitee/comitee.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ProgramComponent } from './program/program.component';
import { PracticalInfoComponent } from './practical-info/practical-info.component';
import { AccomodationComponent } from './accomodation/accomodation.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "General-Info",
    component: GeneralInfoComponent
  },
  {
    path: "Organizers",
    component: OrganizersComponent
  },
  {
    path: "Committee",
    component: ComiteeComponent
  },
  {
    path: "Speakers",
    component: SpeakersComponent
  },
  {
    path: "Participants",
    component: ParticipantsComponent
  },
  {
    path: "Program",
    component: ProgramComponent
  },
  {
    path: "Practical-Info",
    component: PracticalInfoComponent
  },
  {
    path: "Accomodation",
    component: AccomodationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
