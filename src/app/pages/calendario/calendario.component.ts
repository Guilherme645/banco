import { Component } from '@angular/core';

interface Event {
  date: Date;
  title: string;
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  date: Date[] | undefined;
  events: Event[] = [];
  selectedDate: Date | undefined;
  eventTitle: string = '';

  addEvent() {
    if (this.selectedDate && this.eventTitle) {
      this.events.push({ date: this.selectedDate, title: this.eventTitle });
      this.selectedDate = undefined;
      this.eventTitle = '';
    }
  }

  onDateSelect(event: Date) {
    this.selectedDate = event;
  }

  isEventDate(date: any): boolean {
    return this.events.some(event => new Date(event.date).toDateString() === new Date(date.year, date.month - 1, date.day).toDateString());
  }

  getEventTitle(date: any): string {
    const event = this.events.find(event => new Date(event.date).toDateString() === new Date(date.year, date.month - 1, date.day).toDateString());
    return event ? event.title : '';
  }
}
