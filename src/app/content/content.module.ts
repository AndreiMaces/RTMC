import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { ComiteeComponent } from './comitee/comitee.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ProgramComponent } from './program/program.component';
import { PracticalInfoComponent } from './practical-info/practical-info.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    HomeComponent,
    GeneralInfoComponent,
    OrganizersComponent,
    ComiteeComponent,
    SpeakersComponent,
    ParticipantsComponent,
    ProgramComponent,
    PracticalInfoComponent,
    AccomodationComponent,
    SanitizeUrlPipe,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [SanitizeUrlPipe]
})
export class ContentModule { }
