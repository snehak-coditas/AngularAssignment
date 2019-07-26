import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/Auth/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'
  ]
})
export class UsersComponent implements OnInit {

  page: number = 1;
  userData: any = {};
  pageI: any;
  currentUser = '';
  userRepo: Array<any> = [];
  userFilter: any = {
    search: 'sne',
    sort: ''
  };
  searchResults;
  total_count;
  listOfNames: Array<any> = [];
  select = this.userFilter.sort;
  btnName = true;

  config: any = {};
  constructor(
    public fb: FormBuilder,
    private auth: AuthService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.total_count

    };
  }


  coll = document.getElementsByClassName("collapsible");

  registrationForm = this.fb.group({
    selectedNames: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }

  ngOnInit() {
    this.searchValue();
    console.log("this is user filter.sort  " + this.userFilter.sort);
    console.log(this.total_count);

  }
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  }
  searchValue() {
    this.auth.getUsers(this.userFilter.search).subscribe((data: any) => {
      this.userData = data.items;
      console.log(this.userData);
      this.total_count = data.totalCount;
    });
    this.getSortedNames();

  }

  findDetails(userName) {
    this.btnName = false;
    this.auth.getDetails(userName).subscribe((data: any) => {
      this.currentUser = userName;

      this.userRepo = data.map(x => {
        return {
          repoName: x.name,
          repoLanguage: x.language,
        };
      });
      this.collapsable(userName);
      console.log(this.userRepo);

    });
  }

  getSortedNames() {
    var select = this.userFilter.sort;

    if (select === "Name (A - Z)") {
      this.userData.map(x => {
        let login = x.login
      });
      this.userData.sort((a: any, b: any) => {
        if (a.login < b.login) {
          return -1;
        } else if (a.login > b.login) {
          return 1;
        } else {
          return 0;
        }
      });
      return this.userData;

    }
    else if (select === "Name (Z - A)") {
      this.userData.map(x => {
        let login = x.login
      });
      this.userData.sort((a: any, b: any) => {
        if (a.login < b.login) {
          return 1;
        } else if (a.login > b.login) {
          return -1;
        } else {
          return 0;
        }
      });
      return this.userData;

    }

  }

  pageChange(newPage: number) {
    this.config.currentPage = newPage;
  }

  collapsable(userName) {
    var x = document.getElementById(userName);


    if (x) {
      if (x.style.display === "none") {
        x.style.display = "block";

      } else {
        x.style.display = "none";
        this.btnName = true;
      }
    }
    for (var i = 0; i < this.coll.length; i++) {
      this.coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  // x(event){
  //   console.log("hiiiiiiiiiiiiiiiiiiiiiii", event);
    
  //   var a=document.getElementById("test") ;
  //   // .value = "clicked"
  //   console.log(a);
    

  // }
  
}


