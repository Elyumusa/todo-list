import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskBoardComponentTemplate() {
    return (
        
        `<section class="taskboard"></section>`
      );
}


export default class TaskBoardComponent extends AbstractComponent{
  get template() {
    return createTaskBoardComponentTemplate();
  }


  // get element() {
  //   if (!this.element) {
  //     this.element = createElement(this.getTemplate());
  //   }

  //   //(this.element)
  //   return this.element;
  // }


  removeElement() {
    this.element = null;
  }
}
