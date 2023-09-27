import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,

} from '@coreui/angular';


// utils

// views
import { AccordionsComponent } from './accordion/accordions.component';


import { HttpClientModule } from '@angular/common/http';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { CrudService } from './crud.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BaseRoutingModule,
    AccordionModule,



    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
  ],
  declarations: [
    AccordionsComponent,


  ],
  providers: [CrudService]
})
export class BaseModule {}
