import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseproductUrl = "http://localhost:8080/product"
const createproductUrl = "http://localhost:8080/product/add"
const delproductUrl = "http://localhost:8080/product/del"
const putproductUrl = "http://localhost:8080/product/put"
const baseregisterUrl = "http://localhost:8080/register"
const createregisterUrl = "http://localhost:8080/register/add"
const delregisterUrl = "http://localhost:8080/register/del"
const putregisterUrl = "http://localhost:8080/register/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllproduct():Observable<any>{
  const url = "http://localhost:8080/allproduct"
  return this._http.get<any>(url)
}

 // create
 createproduct(product: any):Observable<any>{
  console.log(product,'createapi=>');
  return this._http.post(createproductUrl, product)
}

//deleting 

deleteproduct(id: any): Observable<any> {
  return this._http.delete(`${delproductUrl}/${id}`);

}

//update 
updateproduct(id: any, product: any): Observable<any> {
  return this._http.put(`${putproductUrl}/${id}`, product);

}

//get one 
getOneproduct(id:any):Observable<any>{
  return this._http.get(`${baseproductUrl}/${id}`);
}

//get all 
getAllregister():Observable<any>{
  const url = "http://localhost:8080/allregister"
  return this._http.get<any>(url)
}

 // create
 createregister(register: any):Observable<any>{
  console.log(register,'createapi=>');
  return this._http.post(createregisterUrl, register)
}

//deleting 

deleteregister(id: any): Observable<any> {
  return this._http.delete(`${delregisterUrl}/${id}`);

}

//update 
updateregister(id: any, register: any): Observable<any> {
  return this._http.put(`${putregisterUrl}/${id}`, register);

}

//get one 
getOneregister(id:any):Observable<any>{
  return this._http.get(`${baseregisterUrl}/${id}`);
}


}
