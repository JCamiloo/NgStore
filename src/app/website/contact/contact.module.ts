import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ContactModule { }
