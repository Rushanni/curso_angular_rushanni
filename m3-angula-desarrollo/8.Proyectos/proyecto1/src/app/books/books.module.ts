import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BookListComponent,
    BookGalleryComponent,
    BookDetailComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ]
})
export class BooksModule { }