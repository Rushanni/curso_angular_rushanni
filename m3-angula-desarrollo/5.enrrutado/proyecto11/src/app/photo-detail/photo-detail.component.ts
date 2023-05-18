import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo: IPhoto | undefined;



  constructor(private route: ActivatedRoute,
    private photoService: PhotoService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{


      const id = parseInt(params['id'], 10); // 10 indica base 10 (decima1)
    this.photoService.findById(id).subscribe(data => this.photo = data)

    });
  }


}
