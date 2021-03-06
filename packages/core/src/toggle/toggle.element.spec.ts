/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsToggle } from '@clr/core/toggle';
import '@clr/core/toggle/register.js';

describe('cds-toggle', () => {
  let component: CdsToggle;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-toggle>
        <label>toggle</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-toggle>`,
      element
    );

    await waitForComponent('cds-toggle');

    component = element.querySelector<CdsToggle>('cds-toggle');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should sync host checked attr', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(false);

    component.inputControl.click();
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(true);
  });
});
