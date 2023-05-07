import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache, RequestHandler} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {setContext} from "@apollo/client/link/context";
import {environment} from "../environments/environment.development";

const uri = environment.apiUrl; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const auth: ApolloLink = setContext((operation, context) => {
    return {
      headers: {
        Authorization: `Basic ${btoa("sovtech:sovtech")}`
      }
    };
  }) as unknown as ApolloLink;

  const link: ApolloLink = ApolloLink.from([auth, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
