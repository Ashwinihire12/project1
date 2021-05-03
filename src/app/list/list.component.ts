import { ModifyComponent } from './../modify/modify.component';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InventoryService } from '../inventory.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  bsModalRef: BsModalRef;
  modalRef: BsModalRef;
  constructor(
    private inventory: InventoryService,
    private modalService: BsModalService
  ) {}
  collection: any = [];
  ngOnInit(): void {
    this.getInventoryList();
  }

  getInventoryList() {
    this.inventory.getList().subscribe((result) => {
      this.collection = result;
    });
  }
  deleteInventory(item) {
    console.log(item);
    // this.collection.splice(item - 1, 1);
    this.inventory.deleteInventory(item.inventoryId).subscribe((result) => {
      this.collection = result;
      this.modalRef.hide();
      this.getInventoryList();
      Swal.fire('', 'Item deleted succesfully!', 'success');
    });
  }

  get getInventoryListFun() {
    return this.getInventoryList.bind(this);
  }

  openInventoryFormComponent(id?, action?) {
    const initialState = {
      inventoryId: id,
      action,
      getInventoryList: this.getInventoryListFun,
    };
    this.bsModalRef = this.modalService.show(ModifyComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openModal(template: TemplateRef<any>, id) {
    const initialState = {
      inventoryId: id,
    };
    this.modalRef = this.modalService.show(template, { initialState });
  }

  closeModal() {
    this.modalRef.hide();
  }
}
