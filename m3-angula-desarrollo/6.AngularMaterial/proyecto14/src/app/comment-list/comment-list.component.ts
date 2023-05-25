import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
view(_t25: any) {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['id', 'postId', 'name', 'email'];
comments: IComment[] = [];


  constructor(private commentService: CommentService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

findAll(): void{
  this.commentService.findAll().subscribe(data => this.comments = data);

  
}
  
}