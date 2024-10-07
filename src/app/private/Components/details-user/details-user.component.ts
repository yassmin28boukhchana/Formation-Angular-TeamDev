import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../model/department';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit{
  userForm:FormGroup ;
  userId: string | null = null ;
  departmentList: Department []=[] ;
  submitted= false ;
  constructor(private userService : UserService,
              private route:ActivatedRoute,
              private router : Router,
              private departmentService:DepartmentService,
              private fb:FormBuilder){
           this.userForm=this.fb.group({
            id:[null],
            email:['',[Validators.required,Validators.email]],
            firstName:['',Validators.required],
             lastName:['',Validators.required],
             department:[null,Validators.required],
             phoneNumber:[
              null,
              [Validators.required,Validators.min(10000000),Validators.max(99999999),],
             ],
             password :[null,Validators.required,Validators.minLength(4)],
           }) ;
              }
              ngOnInit(): void {
                this.userId = this.route.snapshot.paramMap.get('id');
                if (this.userId != null && this.userId != 'new')
                {
                  this.displayUser(Number(this.userId));}
                console.log(this.userId);
                this.displayDepartement();
              }

              displayDepartement() {
                this.departmentService.getAllDepartment().subscribe((res) => {
                  this.departmentList = res;
                  console.log(res);
                });
              }

              displayUser(id: number) {
                this.userService.getUserById(id).subscribe((res) => {
                   this.userForm.removeControl('password')
                   console.log(res);
                  this.userForm.patchValue(res);
                   this.userForm.controls['department'].setValue(res.departement?.id)
                });
              }

              saveUser() {
                console.log(this.userForm.value);
                this.submitted = true;
                if (this.userForm.valid)
                  {
                    console.log(this.userForm.value);
                    if (this.userForm.value.id) {
                    this.updateUser();    console.log(this.userForm.value);

                  } else {
                    this.addUser();    console.log(this.userForm.value);

                  }}
              }

              addUser() {
                this.userService
                  .addUser({
                    ...this.userForm.value,
                    departmentId: Number(this.userForm.value.department),
                  })
                  .subscribe((res) => {
                    this.router.navigate(['/user']);
                    console.log(res);
                  });
              }

              updateUser() {
                this.userService
                  .editUser(this.userForm.value.id, {
                    ...this.userForm.value,
                    departmentId: this.userForm.value.department,
                  })
                  .subscribe((res) => {
                    console.log(res);
                    this.router.navigate(['/user']);
                  });
              }
            }

