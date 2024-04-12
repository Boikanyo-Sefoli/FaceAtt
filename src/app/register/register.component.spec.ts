// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { RegisterComponent } from './register.component';

// // describe('RegisterComponent', () => {
// //   let component: RegisterComponent;
// //   let fixture: ComponentFixture<RegisterComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [RegisterComponent]
// //     })
// //     .compileComponents();
    
// //     fixture = TestBed.createComponent(RegisterComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });
// // registration.component.ts
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from './auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registrationForm: FormGroup;
//   errorMessage: string;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.createForm();
//   }

//   createForm() {
//     this.registrationForm = this.fb.group({
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required]
//     }, { validator: this.passwordMatchValidator });
//   }

//   passwordMatchValidator(formGroup: FormGroup) {
//     const password = formGroup.get('password').value;
//     const confirmPassword = formGroup.get('confirmPassword').value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

//   onSubmit() {
//     const { username, email, password } = this.registrationForm.value;
//     this.authService.register(username, email, password)
//       .subscribe(
//         () => {
//           // Redirect to login page or desired route upon successful registration
//         },
//         error => {
//           this.errorMessage = error.message;
//         }
//       );
//   }
// }
