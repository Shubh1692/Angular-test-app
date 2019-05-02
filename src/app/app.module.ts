import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookComponent } from './modals/book/book.component';
import { MatButtonModule, MatCardModule,  MatFormFieldModule, MatInputModule,MatSnackBarModule, MatListModule,MatIconModule, MatLineModule, MatToolbarModule, MatDialogModule, MatSelectModule, MatTableModule } from '@angular/material';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './provider/book.service';
import { ChapterComponent } from './modals/chapter/chapter.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ChapterComponent
  ],
  entryComponents: [BookComponent, ChapterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatLineModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
