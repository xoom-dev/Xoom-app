import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../../services/event/event.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from '../../../services/category/category.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  eventId;
  event;
  eventEditForm;
  categories: string[];
  eventTypes;
  constructor(private categoryService: CategoryService,
              private router: ActivatedRoute,
              private eventService: EventService,
              private route: Router) {
    this.eventEditForm = new FormGroup({
      name: new FormControl('', [Validators.maxLength(4), Validators.required] ),
      category: new FormControl('', [Validators.minLength(5), Validators.required]),
      description: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      venue: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getEventId();
    this.getEventById(this.eventId);
    this.categories = this.categoryService.categories;
    this.eventTypes = this.categoryService.types;
  }

  getEventId(): any{
    return this.router.params.subscribe(
      (param) => this.eventId = param.eventId
    );
  }

  getEventById(id: string): any{
    this.eventService.getEventById(id).subscribe(
      response => {
        this.event = response;
        this.eventEditForm = new FormGroup({
          name: new FormControl(this.event.name, [Validators.minLength(4) , Validators.required]),
          category: new FormControl(this.event?.category, [Validators.minLength(4), Validators.required]),
          description: new FormControl(this.event?.description, Validators.required),
          end_date: new FormControl(this.event?.end_date, Validators.required),
          end_time: new FormControl(this.event?.end_time, Validators.required),
          start_date: new FormControl(this.event?.start_date, Validators.required),
          start_time: new FormControl(this.event?.start_time, Validators.required),
          summary: new FormControl(this.event?.summary, Validators.required),
          type: new FormControl(this.event?.type, Validators.required),
          venue: new FormControl(this.event?.venue, Validators.required),
        });
      }
    );
  }

  onSubmit(): void{
    this.eventService.updateEvent(this.eventEditForm.value, this.eventId);
    this.route.navigate(['/manage-events']);
  }

}
