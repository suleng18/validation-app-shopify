import type { RunInput, FunctionRunResult, FunctionError } from '../generated/api';

export function run(input: RunInput): FunctionRunResult {
  const errors: FunctionError[] = input.cart.lines
    .filter(({ quantity }) => quantity > 6)
    .map(() => ({
      localizedMessage: 'Quá giới hạn rồi bạn ei',
      target: 'cart',
    }));

  return {
    errors,
  };
}
