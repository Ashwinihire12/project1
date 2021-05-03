import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { InventoryService } from '../inventory.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
})
export class ModifyComponent implements OnInit {
  @Input() inventoryId: any;
  @Input() action: any;
  @Input() getInventoryList: Function;

  alert: boolean = false;
  isSubmit: boolean = false;
  isLoading: boolean = false;
  inventoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl('', [Validators.required]),
  });

  constructor(
    private inventory: InventoryService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {
    console.log(this.inventoryId);
    if (this.action) {
      this.inventory
        .getCurrentInventory(this.inventoryId)
        .subscribe((result) => {
          this.inventoryForm.patchValue(result);
        });
    }
  }

  get fctrl() {
    return this.inventoryForm.controls;
  }

  collection() {
    this.isSubmit = true;
    if (this.inventoryForm.invalid) {
      // console.log(' userForm is invalid !!!', this.inventoryForm );
      return;
    }
    this.isLoading = true;
    if (this.action) {
      this.inventory
        .updateInventory(this.inventoryId, this.inventoryForm.value)
        .subscribe((result) => {
          this.bsModalRef.hide();
          this.getInventoryList();
          this.isSubmit = false;
          this.isLoading = false;
          Swal.fire('', 'Item updated succesfully!', 'success');
        });
    } else {
      this.inventory
        .saveInventory(this.inventoryForm.value)
        .subscribe((result) => {
          this.bsModalRef.hide();
          this.getInventoryList();
          this.isSubmit = false;
          this.isLoading = false;
          Swal.fire('', 'Item added succesfully!', 'success');
        });
    }
  }
  closeAlert() {
    this.alert = false;
  }
}
