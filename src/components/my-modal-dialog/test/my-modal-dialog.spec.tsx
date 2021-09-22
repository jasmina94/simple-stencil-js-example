import { newSpecPage } from '@stencil/core/testing';
import { MyModalDialog } from '../my-modal-dialog';

describe('my-modal-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyModalDialog],
      html: `<my-modal-dialog></my-modal-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <my-modal-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-modal-dialog>
    `);
  });
});
