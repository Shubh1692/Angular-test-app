import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { BookComponent } from './modals/book/book.component';
import { BookService } from './provider/book.service';
import { ChapterComponent } from './modals/chapter/chapter.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public books: Array<any> = [];
  constructor(private bookService: BookService, private snackBar: MatSnackBar, private dialog: MatDialog) { }
  ngOnInit() {
    this.bookService.getBooks()
      .then((books: Array<any>) => {
        this.books = books;
      });
  }


  addEditBook(book?, index?) {
    let dialogRef = this.dialog.open(BookComponent, {
      data: { book: book }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        typeof index !== 'undefined' ? (this.books[index] = result, this.snackBar.open('Book detail updated', 'Success', {
          duration: 600000,
        })) : (this.books.push(result), this.snackBar.open('New book added', 'Success', {
          duration: 600000,
        }));
    });
  }

  addEditChapter(bookIndex, chapter?, chapterIndex?) {
    console.log(bookIndex, chapter, chapterIndex)
    let dialogRef = this.dialog.open(ChapterComponent, {
      data: { chapter: chapter }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        typeof chapterIndex !== 'undefined' ? (this.books[bookIndex].chapters[chapterIndex] = result, this.snackBar.open('Chapter title updated', 'Success', {
          duration: 600000,
        })) : (this.books[bookIndex].chapters.push(result), this.snackBar.open('New chapter added', 'Success', {
          duration: 600000,
        }));
    });
  }
}
