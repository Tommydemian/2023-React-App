import {describe, expect, it} from 'vitest';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter',() => {
  it('should display correct initial value which is passed as props',() => {
    const initialvalue = 0;
    const {getByTestId} = render(<Counter initialCount={initialvalue}/>);
    const countValue = Number(getByTestId('count').textContent);
    expect(countValue).toEqual(0);
  });
});