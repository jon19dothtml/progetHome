import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-device',
  imports: [],
  templateUrl: './device.html',
  styleUrl: './device.scss'
})
export class Device {
  id: string |undefined;
  name: string |undefined;
  description: string | undefined;

  private route = inject(ActivatedRoute);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id') || undefined;
    this.name = this.route.snapshot.queryParams['name'] || undefined;
    this.description = this.route.snapshot.queryParams['description'] || undefined;
  }
}
