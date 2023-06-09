import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/book.model';
import { IAuthor } from 'src/app/authors/models/author.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'sinopsis', 'release', 'numPages', 'price', 'actions'];
  books: IBook[] = [];
  authors: IAuthor[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => this.books = data);
  }

  deleteBook(book: IBook){

  }

}