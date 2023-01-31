import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formReg : FormGroup

  constructor(
    private auth : AuthService,
    private router : Router
    ) {
    this.formReg = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
    })
  }
  login() {
    return this.auth.signIn(this.formReg.value)
          .then(response =>{
            console.log(response);
            return this.router.navigate(['main']);
          })
          .catch(error => console.log(error)
          )

      
  }
}
