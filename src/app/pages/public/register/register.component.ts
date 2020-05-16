import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import swal from 'sweetalert';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', [Validators.required]),
      terms: new FormControl(false, [Validators.required, , Validators.requiredTrue])
    }, {validators: this.MustMatch('password', 'confirmpassword')});
  }

  signUp() {
    this.markFormGroupTouched(this.form);
    if (!this.form.value.terms) {
      swal('Atención', 'Debe aceptar los terminos y condiciones', 'warning');
    }

    if (this.form.invalid) {
      return;
    }


    this.authService.signUp(this.form.value).subscribe(() => {
        swal('Exito', 'Usuario creado', 'success');
        this.router.navigate(['login']);
      },
      error => swal('Ups!', 'Algo salio mal', 'error'));

  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (group: FormGroup) => {
      let control = group.controls[controlName].value;
      let matchingControl = group.controls[matchingControlName].value

      if (control === matchingControl) {
        return null;
      }

      return {
        mustMatch: true
      }
    };
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
