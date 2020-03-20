import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-scan-part',
  templateUrl: './scan-part.component.html',
  styleUrls: ['./scan-part.component.scss']
})
export class ScanPartComponent implements OnInit {
  public webcamImages: any = [];
 
  public webcamImage: WebcamImage = null;
  showCameraView: boolean;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleCamera() {
    this.showCameraView = !this.showCameraView;
  }

 

}
