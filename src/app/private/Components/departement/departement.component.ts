import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-departement', // kifesh tkhalina naamlo appel ta3 component f wost html mte3 component akher
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css'],
})
export class DepartementComponent implements OnInit {
  departmentList: Department[] = [];

  constructor(private departementService: DepartmentService) {}
  ngOnInit(): void {
    this.displayDepartement();
  }

  displayDepartement() {
    // subscribe bsh tokood tfollowi fl methode heki lin tjib resultat nn
    this.departementService.getAllDepartment().subscribe((res) => {
      this.departmentList = res;
      console.log(res);
    });
  }

  selectedDepartment!: Department;
  selectDepartment(department: any) {
    this.selectedDepartment = department;
  }
  deleteDepartment() {
    if(this.selectedDepartment.id){this.departementService
      .deleteDepartment(this.selectedDepartment.id)
      .subscribe((res) => {
        console.log(res);
        this.displayDepartement();
      });}



  }
}
