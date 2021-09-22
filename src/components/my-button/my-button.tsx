import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Prop() text: string;
  @Prop() appereance: string;

  render() {
    return (
      <button class={`btn ${this.appereance}`} type="button">
        {this.text}
      </button>
    );
  }

}
