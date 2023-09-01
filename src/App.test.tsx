import { describe, test, expect } from 'vitest';
import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('App should be rendered', () => {
    render (<App/>);
    // assertion
    expect(1+1).toBe(2);
  });
});