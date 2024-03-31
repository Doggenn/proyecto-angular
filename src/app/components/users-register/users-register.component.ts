import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.scss']
})
export class UsersRegisterComponent {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  async onSubmit() {
    try {
      const response = await this.usersService.registro(this.formulario.value);
      alert('Usuario registrado');
      this.router.navigateByUrl('/login');
    } catch (error) {
      alert('Error en el registro');
  }

    // const response = await this.usersService.registro(this.formulario.value);
    // console.log(response);
    
    // if (response.success) {
    //   alert('Usuario registrado');
    //   this.router.navigateByUrl('/login');
    // } else {
    //   alert('Error en el registro');
    // }
  }
}
