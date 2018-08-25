import { Route } from '@angular/router';
import { AuthorComponent } from './author.component';
import { UserRouteAccessService } from '../../shared';

export const authorRoute: Route = {
    path: '',
    component: AuthorComponent,
    data: {
      authorities: []
    },
    canActivate: [UserRouteAccessService]
};
