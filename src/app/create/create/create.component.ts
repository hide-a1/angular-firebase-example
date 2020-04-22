import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
  });

  get nameContorol() {
    return this.form.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
