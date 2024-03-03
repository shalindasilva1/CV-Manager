import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO, UserService } from 'src/app/Services/SWAGGER';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token: String = "";
  loginForm!: FormGroup;
  loginDTO!: LoginDTO;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginDTO = {
      username: '',
      password: ''
    };
  }

  login() {
    if (this.loginForm.valid) {
      this.loginDTO.username = this.loginForm.get('username')?.value;
      this.loginDTO.password = this.loginForm.get('password')?.value;
      this.userService.apiUserLoginPost(this.loginDTO).subscribe(
        (res) => {
          if (res && res.data.token){
            localStorage.setItem('token', res.data.token);
          }
          
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        });
    }

  }
}
