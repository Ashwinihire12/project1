import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  // url=""
  constructor(private http:HttpClient){}
  getList()
  {
    return this.http.get(`${environment.url}`);
  }
  saveInventory(data)
  {
//console.warn("service",data);
return this.http.post(`${environment.url}`,data)

  }
  deleteInventory(id)
  {
    return this.http.delete(`${environment.url}/${id}`);
  }
  getCurrentInventory(id)
  {
    return this.http.get(`${environment.url}/${id}`);

  }
  updateInventory(id,data)
  {
    return this.http.put(`${environment.url}/${id}`,data);

  }
}

