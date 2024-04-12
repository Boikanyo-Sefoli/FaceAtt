// // login.component.ts
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.createForm();
//   }

//   createForm() {
//     this.loginForm = this.fb.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     const { email, password } = this.loginForm.value;
//     this.authService.login(email, password)
//       .subscribe(
//         () => {
//           // Redirect to home page or desired route upon successful login
//         },
//         error => {
//           this.errorMessage = error.message;
//         }
//       );
//   }
// }
