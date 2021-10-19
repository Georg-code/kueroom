import { render } from '@testing-library/react';

import TimeSelect from './time-select';

describe('TimeSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimeSelect />);
    expect(baseElement).toBeTruthy();
  });
});
