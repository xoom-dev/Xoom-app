import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../services/category/category.service';
import {EventService} from '../../../services/event/event.service';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  addEventForm: any;
  categories: string[];
  eventTypes;

  constructor(private categoryService: CategoryService,
              private eventService: EventService,
              private authService: FirebaseService,
              private route: Router) { }

  ngOnInit(): void {
    this.addEventForm = new FormGroup({
      category: new FormControl('', [Validators.maxLength(20), Validators.required]),
      description: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.minLength(4) , Validators.required]),
      poster: new FormControl(''),
      recurrent: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      venue: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required)
    });
    this.categories = this.categoryService.categories;
    this.eventTypes = this.categoryService.types;
  }

  onSubmit(): any {
    this.addEventForm.value.userId = this.authService.getLogInUserId().uid;
    this.eventService.createEvent(this.addEventForm.value).then(
      res => {
      }
    );
  }

}
