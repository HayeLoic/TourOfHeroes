import { Injectable } from '@angular/core';
import { Message } from './messages/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];

  generateId(): number {
    let maxId = 0;
    this.messages.reduce((prev: any, item: any) => {
      maxId = Math.max(maxId, item.id);
    }, null);
    return maxId + 1;
  }

  add(description: string) {
    var message: Message = {
      id: this.generateId(),
      description: description
    }
    this.messages.push(message);
  }

  remove(message: Message) {
     var index = this.messages.indexOf(message, 0);
     if (index > -1) {
       this.messages.splice(index, 1);
     }
  }

  clear() {
    this.messages = [];
  }
}
