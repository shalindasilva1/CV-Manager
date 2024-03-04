import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO, UserService } from 'src/app/Services/SWAGGER';
import { UserManagementService } from 'src/app/Services/userManagement/usermanagement.service';

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
    private userManagementService: UserManagementService,
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
            if (res.data.user) {
              localStorage.setItem('user', JSON.stringify(res.data.user));
              this.userManagementService.setUser(res.data.user);

            }
          }
          
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        });
    }

  }
}
