import {createElement} from '../framework/render.js';


function createTaskComponentTemplate(task) {
    const {title, status}=task;

    return (
        `
        <div class="${status}">
        <div class="task__body">
        <p class="task--view">${title}</p>
        <input type="text" class="task--input" placeholder="Change and update task"/>
        </div>
        <button aria-label="change" class="task__edit" type="button">Change</button>
        </div>`
      );
}


export default class TaskComponent {

  constructor({task}){
    this.task=task;
  }
  getTemplate() {
    return createTaskComponentTemplate(this.task);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
