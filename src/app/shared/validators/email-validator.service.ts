import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
        const email  = control.value;
        const httpCallObservable = new Observable<ValidationErrors | null>((suscriber)=>{
            console.log({email});
            if(email==='everalexander126@gmail.com'){
                suscriber.next({emailTaken : true});
                suscriber.complete();
            }
            suscriber.next(null);
            suscriber.complete();
        }).pipe(
            delay(3000)
        );
        return httpCallObservable;
    }
 
}