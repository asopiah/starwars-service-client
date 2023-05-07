import {Injectable} from '@angular/core';
import {Apollo, Query} from "apollo-angular";
import {map, Observable} from "rxjs";
import {gql} from "@apollo/client/core";
import {Person} from "../../models/person";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apollo: Apollo) {
  }

  public getPeople(): Observable<Person[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
      query getAllPeople {
          getAllPeople {
            name
            height
            mass
            gender
            homeworld
          }
        }
      `
    })
      .valueChanges
      .pipe(map(result => result.data["getAllPeople"])
      );
  }

  public getPerson(name: String): Observable<Person> {
    return this.apollo.watchQuery<Query>({
      query: gql`
      query getPerson($name: String!) {
          getPerson(name: $name) {
            name
            height
            mass
            gender
            homeworld
          }
        }
      `,
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
      query: gql`
      query searchPerson($name: String!) {
          searchPerson(name: $name) {
            name
            height
            mass
            gender
            homeworld
          }
        }
      `,
      variables: {
        name: name,
      },
    })
      .valueChanges
      .pipe(map(result => result.data["searchPerson"])
      );
  }

}
