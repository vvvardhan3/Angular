import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc"

@NgModule({
    declarations:[
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }