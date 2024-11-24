import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    TabViewModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    CalendarModule,
  ],
})
export class ComponentsModule {}
