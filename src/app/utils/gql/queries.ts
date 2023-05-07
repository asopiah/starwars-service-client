import {gql} from "apollo-angular";

export const getAllPeopleQuery = gql`query getAllPeople { getAllPeople { name height mass gender homeworld } }`;

export const getPersonQuery = gql`query getPerson($name: String!) { getPerson(name: $name) { name height mass gender homeworld } }`;

export const searchPersonQuery = gql`query searchPerson($name: String!) { searchPerson(name: $name) { name height mass gender homeworld } }`;

export const getPeopleForPageQuery = gql`query getAllPeople($page: Int!) { getAllPeople(page: $page) { name height mass gender homeworld } }`;
