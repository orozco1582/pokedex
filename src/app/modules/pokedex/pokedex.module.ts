import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { LoginAuthGuard } from 'src/services/login.guard';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';
import { SesionService } from 'src/services/sesion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule, MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  providers: [LoginAuthGuard, SesionService],
  declarations: [LoginComponent, LandscapeComponent, NotFoundPageComponent]
})
export class PokedexModule {
    public static   getRoutes() {
        return [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'pokedex',
                component: LandscapeComponent,
                canActivate: [LoginAuthGuard]
            },
            {
                path: '**',
                component: NotFoundPageComponent
            }
        ];
    }
}
