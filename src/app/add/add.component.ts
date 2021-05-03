import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {InventoryService} from '../inventory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert:Boolean=false;

addInventory= new FormGroup({
  name: new FormControl(''),
  description : new FormControl(''),
  price :new FormControl('')

})
  constructor(private inventory:InventoryService) { }

  ngOnInit(): void {
  }
  collectInventory()
  {
    //console.warn(this.addInventory.value)
    this.inventory.saveInventory(this.addInventory.value).subscribe((result)=>{
      this.alert=true;
      this.addInventory.reset({})
    })
    
  }
  closeAlert()
  {
this.alert=false;
  }
  
}
