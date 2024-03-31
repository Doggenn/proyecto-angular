import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent {
  formulario: FormGroup;

  formBuilder = inject(FormBuilder);
  usersService = inject(UsersService);
  router = inject(Router)
  constructor()
  {
    this.formulario = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }

  async onSubmit() {
    // const response = await this.usersService.login(this.formulario.value);
    // if (response.success) {
    //   // Alerta avisando del login correcto
    //   // TODO: Poner la alerta bonita
    //   alert('Login correcto');
    //   // ¿Cómo nos guardamos el token?
    //   localStorage.setItem('token_crm', response.token!);
    //   // ¿Redirigimos? ¿Dónde?
    //   // /empleados
    //   this.router.navigateByUrl('/gestion');
    // } else {
    //   alert(response.error);
    //   console.log(response);
      
    // }
    try {
      const response = await this.usersService.login(this.formulario.value);
      console.log(response);
      
      alert('Login correcto');
      localStorage.setItem('token_crm', response.token!);
      this.router.navigateByUrl('/gestion');
    } catch (error) {
      alert('Error en el login');
    }
  }
}
