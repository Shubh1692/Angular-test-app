import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<ChapterComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data && this.data.chapter)
      this.form.patchValue(this.data.chapter);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(
      Object.assign({}, {
        startPage: this.data && this.data.chapter ? this.data.chapter.startPage : 1,
        numberOfPages: this.data && this.data.chapter ? this.data.chapter.numberOfPages : 10
      }, this.form.value));
  }

}