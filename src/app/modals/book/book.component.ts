import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../provider/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public authors: Array<any> = [];
  form: FormGroup;
  constructor(private bookService: BookService, private dialogRef: MatDialogRef<BookComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      ISBN: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (!this.bookService.authors.length)
    this.bookService.getAuthors()
      .then((authors: Array<any>) => {
        this.authors = authors;
        if (this.data.book) {
          this.form.patchValue(this.data.book);
        }
      });
    else  {
      this.authors = this.bookService.authors;
      if (this.data.book) {
        this.form.patchValue(this.data.book);
      }
    }
      
  }

 
  
  onCancel(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(
      Object.assign({}, {
        publishingDate: new Date().toString(),
        id: this.data  && this.data.book ? this.data.book.id : new Date().getTime(),
        publisher: this.data  && this.data.book ? this.data.book.publisher : "Me",
        edition: this.data  && this.data.book ? this.data.book.edition : "First",
        chapters: this.data  && this.data.book ? this.data.book.chapters : []
      }, this.form.value));
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }



 
}
