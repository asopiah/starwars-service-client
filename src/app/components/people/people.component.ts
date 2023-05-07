import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../models/person";
import {PeopleService} from "../../services/people/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{

  people: Observable<Person[]>
  searchName: string
  currentPage: number = 1;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

  onSearch(): void {
    this.people = this.peopleService.searchPerson(this.searchName)
  }

  nextPage(): void {
    this.currentPage++;
    this.people = this.peopleService.getPeopleForPage(this.currentPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.people = this.peopleService.getPeopleForPage(this.currentPage);
    }
  }
}
