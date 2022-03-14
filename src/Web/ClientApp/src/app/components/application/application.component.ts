import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDto, AppService } from 'src/app/core/api/v1';

@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
	id!: string;
	app!: AppDto;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private readonly appService: AppService) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.id = params['id'];
			this.refreshData();
		});
	}

	refreshData() {
		this.appService.apiAppGet().subscribe(vm => {
			let app = vm.apps.find(element => element.id == this.id);
			app === undefined ? this.router.navigate(['/404']) : this.app = app;
		});
	}
}