/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {ComponentsApp} from '../ComponentsApp';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<ComponentsApp />);
  });
});
