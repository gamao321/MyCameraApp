import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CameraComponent } from "./Camera/camera.component";

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
