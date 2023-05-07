import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../models/person";
import {ActivatedRoute} from "@angular/router";
import {PeopleService} from "../../services/people/people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name: string
  person: Observable<Person>

  constructor(private _activatedRoute: ActivatedRoute,
              private peopleService: PeopleService) {
  }

  ngOnInit(): void {

    this._activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
      this.name = params.get('name');
    });
    this.person = this.peopleService.searchPeople(this.name);
    this.person.subscribe(person => {
      console.log(person)
    })
  }

}
