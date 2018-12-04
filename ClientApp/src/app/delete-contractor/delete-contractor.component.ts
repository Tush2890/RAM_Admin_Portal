import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-contractor',
  templateUrl: './delete-contractor.component.html',
  styleUrls: ['./delete-contractor.component.css']
})
export class DeleteContractorComponent {
  
  @ViewChild("dbtnRef", { read: ElementRef }) dref: ElementRef

  constructor(private _location: Location) { }

  deleteContract() {
     //call service
  }

  modalBody: string;

  showModal(modalBody: string) {
    if (modalBody != undefined) {
      this.modalBody = modalBody;
      this.dref.nativeElement.click();
    }
  }
}
