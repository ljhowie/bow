import { Component } from '@angular/core';
import { BowService } from '../services/bow.service';
import { Text } from '../models/text';
import { TextBow } from '../models/textBow';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  result: string;
  request: Text;

  constructor(private bowService: BowService){
    this.reset();
  }

  async onFileSelected(event: Event): Promise<void> {
    this.reset();

    const file = (event.target as HTMLInputElement).files?.item(0)

    if (file) {
        this.request = {
          name: file.name,
          content: await file.text()
        }

        this.bowService.postBow(this.request)
          .subscribe((response: TextBow) => {
            this.result = response.features
          })
    }
  }

  reset(): void {
    this.request = {
      name: "",
      content: ""
    };

    this.result = ""
  }
}
