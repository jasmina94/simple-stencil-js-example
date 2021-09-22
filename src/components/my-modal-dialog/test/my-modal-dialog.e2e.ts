import { newE2EPage } from '@stencil/core/testing';

describe('my-modal-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-modal-dialog></my-modal-dialog>');

    const element = await page.find('my-modal-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
