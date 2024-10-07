import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
/* injection tsir f wost l constructeur khatr angular a choisit l contructeur bsh ishouf kan service lakher aaamel injection ijibha kima @Autowired */
  constructor(private httpclient: HttpClient)   { }
  baseUrl = 'http://localhost:8082/api';
  getAllDepartment(){
    return this.httpclient.get<Department[]>(
     'http://localhost:8082/api/departements'
    );
  }

  addDepartment(department : Department){
    return this.httpclient.post(this.baseUrl+'/departements', department);
  }

  deleteDepartment(id: number){
    return this.httpclient.delete(this.baseUrl + '/departements/' + id);

  }

  editDepartment(id:number,department:Department){
    return this.httpclient.put(this.baseUrl+'/departements/'+id,department);
  }

  getDepartmentById(id:number){
    return this.httpclient.get<Department>(this.baseUrl+'/departements/'+id);
  }
}
