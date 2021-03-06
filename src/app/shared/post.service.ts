import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {FbCreateResponse} from '../../environments/interface';

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((res: FbCreateResponse) => {
        return {
          ...post,
          id: res.name,
          date: new Date(post.date)
        }
      }));
  }
}
