import {Component} from '@angular/core';
import {FormControl, UntypedFormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";

@Component({
  selector: "create-course-step-1",
  templateUrl: "create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  longText = "asdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasdasdadasdasdasdasd"
  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: new FormControl(
      { value: false, disabled: false },
      Validators.requiredTrue
    ),
    longDescription: [this.longText, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: UntypedFormBuilder) {
  }


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate();
    if (view == 'month') {
      return (date == 1) ? 'example-custom-date-class' : "";
    }

    return "";
  }

  get courseTitle() {
    return this.form.controls['title'];
  }
}
