import {Injectable} from '@angular/core';
import {Apollo, Query} from "apollo-angular";
import {map, Observable} from "rxjs";
import {gql} from "@apollo/client/core";
import {Person} from "../../models/person";
import {getAllPeopleQuery, getPeopleForPageQuery, getPersonQuery, searchPersonQuery} from "../../utils/gql/queries";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apollo: Apollo) {
  }

  public getPeople(): Observable<Person[]> {
    return this.apollo.watchQuery<Query>({
      query: getAllPeopleQuery
    })
      .valueChanges
      .pipe(map(result => result.data["getAllPeople"])
      );
  }

  public searchPeople(name: String): Observable<Person> {
    return this.apollo.watchQuery<Query>({
      query: getPersonQuery,
      variables: {
        name: name,
      },
    })
      .valueChanges
      .pipe(map(result => result.data["getPerson"])
      );
  }

  public searchPerson(name: String): Observable<Person[]> {
    return this.apollo.watchQuery<Query>({
      query: searchPersonQuery,
      variables: {
        name: name,
      },
    })
      .valueChanges
      .pipe(map(result => result.data["searchPerson"])
      );
  }

  public getPeopleForPage(page: number): Observable<Person[]> {
    return this.apollo.watchQuery<Query>({
      query: getPeopleForPageQuery,
      variables: {
        page: page,
      },
    })
      .valueChanges
      .pipe(map(result => result.data["getAllPeople"])
      );
  }
}
