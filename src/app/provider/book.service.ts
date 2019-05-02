import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { MatSnackBar } from '@angular/material';
@Injectable()
export class BookService {
  options = new RequestOptions({ headers: new Headers({ 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin': '*' }) })
  constructor(private http: Http, private snackBar: MatSnackBar) { }
  public authors: Array<any> = [];
  getBooks() {
    return new Promise((resolve, reject) => {
      this.http.get(window.location.origin + '/assets/books.json', this.options)
        .subscribe((success: any) => {
          success = success.json();
          resolve(success)
        }, (error) => {
          reject(error);
          this.snackBar.open('Error in book fetch', 'Error', {
            duration: 600000,
          });
        })
    });
  }

  getAuthors() {
    return new Promise((resolve, reject) => {
      this.http.get(window.location.origin + '/assets/authors.json', this.options)
        .subscribe((success: any) => {
          success = success.json();
          this.authors = success
          resolve(success)
        }, (error) => {
          reject(error);
          this.snackBar.open('Error in authors fetch', 'Error', {
            duration: 600000,
          });
        })
    });
  }
}
