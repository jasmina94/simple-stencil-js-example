import { Component, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'my-modal-dialog',
  styleUrl: 'my-modal-dialog.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyModalDialog {
  @Prop() closeIcon = 'x.svg';
  @Prop() visible: boolean;

  private closeDialog = () => {
    this.visible = false;
  }

  render() {
    return (
      <div class={`modal-wrapper ${this.visible ? 'is-open' : ''}`}>
        <div class="modal-overlay" />
        <div class="modal">
          <div class="header">
            <h6>Modal header</h6>
            <div class="close">
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" onClick={this.closeDialog} />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            <my-button text="Confirm" appereance="primary" onClick={this.closeDialog}></my-button>
            <my-button text="Close" appereance="tertiary" onClick={this.closeDialog}></my-button>
          </div>
        </div>
      </ div >
    );
  }

}
