import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blogId: any;
  blog: Blog | undefined;
  safeContent: SafeHtml | undefined;

  constructor(private router: ActivatedRoute, private service: BlogService, private sentizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(paramMap => {
      this.blogId = Number(paramMap.get('id'))
      this.blog = this.service.getBlogById(this.blogId)

      if (this.blog && this.blog.content) {
        this.safeContent = this.sentizer.bypassSecurityTrustHtml(this.blog.content)
      }
    })
  }
}
