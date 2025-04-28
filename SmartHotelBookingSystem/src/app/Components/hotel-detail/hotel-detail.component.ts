import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [RouterModule],  
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  hotel: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    // Fetch hotel data based on hotelId
    // This is a placeholder. Replace with actual data fetching logic.
    if (hotelId === 'novotel') {
      this.hotel = {
        image: 'https://www.ahstatic.com/photos/7089_ho_00_p_1024x768.jpg',
        name: 'NOVOTEL',
        rating: 9.0,
        reviews: 19935,
        location: 'Chennai, India',
        price: 5000,
        description: 'NOVOTEL offers a luxurious stay with modern amenities and excellent service.',
        amenities: 'Free Wi-Fi, Swimming Pool, Spa, Gym, Restaurant, Bar',
        contact: '+91 9876543210, novotel@example.com'
      };
    }
  }

  goBack(): void {
    window.history.back();
  }
}
