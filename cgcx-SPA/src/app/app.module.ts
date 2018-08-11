
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import { ReportViewComponent } from './reports/report-view/report-view.component';
import { VotingPanelComponent } from './user/voting-panel/voting-panel.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserSummaryComponent } from './admin/user-summary/user-summary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AltCoinEditorComponent } from './admin/alt-coin/alt-coin-editor/alt-coin-editor.component';
import { AltCoinListComponent } from './admin/alt-coin/alt-coin-list/alt-coin-list.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomePageComponent,
        AdminLoginComponent,
        UserLoginComponent,
        AdminRegisterComponent,
        ReportViewComponent,
        VotingPanelComponent,
        AltCoinListComponent,
        AltCoinEditorComponent,
        UserSummaryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'home-page' },
            { path: 'home-page', component: HomePageComponent },
            // Admin
            { path: 'admin/alt-coins', component: AltCoinListComponent },
            { path: 'admin/alt-coins/create', component: AltCoinEditorComponent, },
            { path: 'admin/alt-coins/edit/:id', component: AltCoinEditorComponent },
            { path: 'admin/user-summary', component: UserSummaryComponent },
            { path: 'admin/register', component: AdminRegisterComponent },
            { path: 'admin/login', component: AdminLoginComponent },
            // User
            { path: 'user/voting-panel', component: VotingPanelComponent },
            { path: 'user/login', component: UserLoginComponent },

            // Reports
            { path: 'report/report-view', component: ReportViewComponent },


        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
