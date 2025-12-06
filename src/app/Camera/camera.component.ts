import { Component } from "@angular/core";
import { Camera, requestPermissions } from "@nativescript/camera";

@Component({
  selector: "ns-camera",
  templateUrl: "./camera.component.html"
})
export class CameraComponent {

  imageSrc: any = null;

  ngOnInit() {
    requestPermissions();
  }

  openCamera() {
    Camera.takePicture({
      width: 800,
      height: 600,
      keepAspectRatio: true,
      saveToGallery: true
    })
    .then(imageAsset => {
      this.imageSrc = imageAsset;
      console.log("Photo captured!");
    })
    .catch(e => console.log(e));
  }
}
