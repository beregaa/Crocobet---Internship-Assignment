import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostInterface } from '../../interfaces/post.interface';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css'],
})
export class ModalButtonComponent {
  @Input() postData: PostInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { postData: PostInterface }) {
    this.postData = data.postData;
  }
}
