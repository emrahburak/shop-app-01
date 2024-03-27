import { Component, OnInit } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { BlogService } from '../services/blog.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogList: Blog[] = []

  constructor(private service: BlogService) {
  }

  ngOnInit(): void {
    this.blogList = this.service.getAll();
  }


}
