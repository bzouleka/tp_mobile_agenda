import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyEventPage } from './myEvent.page';
import { CalendarModule } from '../calendar/calendar.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    CalendarModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyEventPage }])
  ],
  declarations: [MyEventPage]
})
export class MyEventPageModule {}
