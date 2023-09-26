import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'saga',
        data: { pageTitle: 'sagaMatrixApp.saga.home.title' },
        loadChildren: () => import('./saga/saga.module').then(m => m.SagaModule),
      },
      {
        path: 'section',
        data: { pageTitle: 'sagaMatrixApp.section.home.title' },
        loadChildren: () => import('./section/section.module').then(m => m.SectionModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
