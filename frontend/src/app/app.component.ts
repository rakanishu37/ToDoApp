import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ToDoService } from 'src/services/to-do.service';
import ToDo from 'src/types/ToDo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  public title = 'frontend';
  public todos: ToDo[];
  
  constructor(private toDoService: ToDoService){}

  ngOnInit(): void {

    this.subscription = this.toDoService.getToDos().subscribe(response =>{
      console.log(response);
      this.todos = response.toDos;
    }); 
    console.log(this.todos);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

/*
{
	"toDos":[
		{
			id: 1,
			title: "titulo",
			isMarked: true	
		}
	]
}
*/