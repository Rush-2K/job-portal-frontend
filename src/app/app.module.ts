import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { LoginComponent } from "./features/auth/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptors/token.interceptor";
import { RegisterComponent } from "./features/auth/register/register.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}