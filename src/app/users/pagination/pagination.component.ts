import { Component} from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
// import 'rxjs/add/operators/catch ' ;


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  {

  config: any; 
  collection = [];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.config = {
    			currentPage: 1,
    			itemsPerPage: 10
    };

    this.route.queryParamMap.pipe(
            map(params => params.get('page')))
            .subscribe(page => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }

  }


     pageChange(newPage: number) {
		this.router.navigate([''], { queryParams: { page: newPage } });
	}
 

}
