import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses = [
    { id: 1, title: 'Angular Basics', completed: false },
    { id: 2, title: 'Advanced Angular', completed: true }
  ];

  markAsCompleted(course: any) {
    course.completed = true;
  }
}
