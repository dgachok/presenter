import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {Message} from "../../interfaces/message";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss']
})
export class PresenterComponent implements OnInit, OnChanges {
  @Input() selectedMessage: Message;
  @Output() submitMessageChange = new EventEmitter<Message>();

  messageForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.messageForm = this.fb.group({
      id: null,
      text: ['', Validators.required],
      sender: ['', Validators.required],
      expirationDt: '',
      attachment: ''
    });
  }

  ngOnInit() {
  }

  submitMessage({value, valid}) {
    if (valid) {
      this.submitMessageChange.emit(value);
    }
  }

  onUploadFile(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        this.messageForm.get('attachment').setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnChanges() {
    if (this.selectedMessage) {
      this.messageForm.patchValue(this.selectedMessage);
    }
  }
}
