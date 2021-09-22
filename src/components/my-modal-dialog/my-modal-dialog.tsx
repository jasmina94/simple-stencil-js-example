import { Component, h, getAssetPath, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-modal-dialog',
  styleUrl: 'my-modal-dialog.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyModalDialog {
  @Prop() closeIcon = 'x.svg';
  @Prop() visible: boolean;
  @Prop() buttons: string;
  @Prop() header: string;

  // State for buttons
  @State() _buttons: Array<any>

  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons
    }
  }

  @Event() private myCoolEvent: EventEmitter;

  // Before the component mounts/loads, convert buttons to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
    console.log(this.buttons, 'Original');
    console.log(this._buttons, 'New');
  }

  private closeDialog = () => {
    this.visible = false;
  }

  private handleAction = () => {
    this.myCoolEvent.emit();
  }

  render() {
    return (
      <div class={`modal-wrapper ${this.visible ? 'is-open' : ''}`}>
        <div class="modal-overlay" />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close">
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" onClick={this.closeDialog} />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {this._buttons.map((item, index) => (
              <my-button text={item.text} appereance={index === 0 ? 'primary' : 'tertiary'}
                onClick={index === 0 ? this.handleAction : this.closeDialog}></my-button>
            ))}
            {/* <my-button text="Confirm" appereance="primary" onClick={this.closeDialog}></my-button>
            <my-button text="Close" appereance="tertiary" onClick={this.closeDialog}></my-button> */}
          </div>
        </div>
      </ div >
    );
  }

}
