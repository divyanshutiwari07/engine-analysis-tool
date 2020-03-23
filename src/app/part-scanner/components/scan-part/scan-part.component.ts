import { Component, OnInit, OnChanges } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-scan-part',
  templateUrl: './scan-part.component.html',
  styleUrls: ['./scan-part.component.scss']
})
export class ScanPartComponent implements OnInit, OnChanges {
  public webcamImages: any = [];
  public selectedOutlineImage;
  public outlineImageList;
  public webcamImage: WebcamImage = null;
  showCameraView: boolean;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  constructor() { }

  ngOnInit() {
    this.outlineImageList = [
      { image: 'first', src: 'assest/images/utc-engine-outline.png' },
      { image: 'seocnd', src: 'assest/images/utc-engine-outline.png' }
    ];
  }

  ngOnChanges() {
    
  }

  toggleCamera() {
    this.showCameraView = !this.showCameraView;
  }

}
