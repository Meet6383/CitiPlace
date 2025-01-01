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
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ServiceComponent } from './service/service.component';
import { DisplayComponent } from './display/display.component';
import { PurposeComponent } from './purpose/purpose.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    DisplayComponent,
    PurposeComponent,
    AccountComponent,
  ],
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
    MenubarModule,
    AvatarModule,
    BadgeModule,
  ],
})
export class ComponentsModule {}
