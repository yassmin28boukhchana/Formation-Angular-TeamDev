import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {
 department : Department = {
   name: '', adresse: ''
 };
departmentId:string | null = null ;
constructor(private departmentService : DepartmentService,
           private route: ActivatedRoute,
           private router: Router
           ){}
addDepartment(){
  this.departmentService.addDepartment(this.department).subscribe((res)=>{
    console.log(res);
  }
  );
}

ngOnInit(): void {
  this.departmentId=this.route.snapshot.paramMap.get('id');
  if(this.departmentId != null && this.departmentId != 'new')
      this.displayDepartement(Number(this.departmentId));
    console.log(this.departmentId);
  }

  displayDepartement(id:number){
    this.departmentService.getDepartmentById(id).subscribe((res)=> {
      this.department = res ;
    });
  }
    updateDepartment( id : number ) {
      this.departmentService
           .editDepartment(id,this.department)
           .subscribe((res) => {
            console.log(res);
           this.router.navigate(['/department']);
          });
    }

    saveDepartment(){
      if(this.department?.id){
        this.updateDepartment(this.department?.id);
      } else {
        this.addDepartment();
      }




    }







}
