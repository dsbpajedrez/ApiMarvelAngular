import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private autService : AuthService,
    private router : Router
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password : new FormControl()
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
      this.autService.register(this.formReg.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/login'])
        })
        .catch(error => console.log(error));
  }

}
