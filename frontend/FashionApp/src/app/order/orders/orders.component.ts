import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  standalone:false
})
export class OrderComponent implements OnInit {
;
  

    orderId: string;
  
    constructor(private route: ActivatedRoute) {
      this.orderId = '';
    }
  
    ngOnInit(): void {
      // Get the order ID from route parameters if available
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.orderId = params['id'];
        }
      });
    }
  }
  
  