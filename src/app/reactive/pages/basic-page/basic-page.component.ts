import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {
  // public myForm = new FormGroup({
  //   name: new FormControl('',[],[]),
  //   price: new FormControl('',[],[]),
  //   insStorage: new FormControl('',[],[]),
  // });

   public rtx  = {
    name: 'RTX 5090',
    price : 2500,
    inStorage : 6,
  }

  constructor(private fb : FormBuilder){}
  ngOnInit(): void {
    this.myForm.reset(this.rtx);
  }

  isValidField (field :  string) : boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;    
  }
  getFieldError(field : string) : string | null{
    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required': 
          return 'Este campo requerido';
        case 'minlength': 
          return `Mínimo ${errors['minlength'].requiredLenght} caracteres.`;  
      }
    }
    return null;
  }

  public myForm: FormGroup = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3)]],
    price : [0, [Validators.required, Validators.min(0)]],
    inStorage : [0,  [Validators.required, Validators.min(0)]],
  });

  onSave(): void{
    if(this.myForm.invalid) {
      this.myForm.markAsTouched();
      return;
    }
    console.log(this.myForm.value); 
    this.myForm.reset({price:0, inStorage:0});
  }

  

}
