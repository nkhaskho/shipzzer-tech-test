import { Component, ElementRef, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gridSize = 14;
  grid: string[][] = [];

  constructor(private colorService: ColorService) {  }

  generateValues() {
    this.grid = [];
    for (let row = 0; row < this.gridSize; row++) {
      let newRow = [];
      for (let col = 0; col < this.gridSize; col++) {
        newRow.push(this.colorService.getRandomColor())
      }
      this.grid.push(newRow);
    }
  }

  displayGrid() {
    this.generateValues();
    console.log(this.grid);
  }

  exportImage() {
    var node:any = document.getElementById('image');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        // create the image file
        var exportedImage = new Image();
        exportedImage.src = dataUrl;
        // create a link to download image
        const imageLink: any = document.createElement('a');
        imageLink.href = dataUrl;
        imageLink.download = exportedImage;
        document.body.appendChild(imageLink);
        imageLink.style = 'display: none';
        // create a download file name
        let dateTimeNow = new Date() 
        imageLink.download = `grid-image-${dateTimeNow.toISOString()}.png`
        imageLink.click();
        imageLink.remove();
      })
      .catch(function (error) {
        console.error('Error while exporting image!', error);
      });
  }

}
