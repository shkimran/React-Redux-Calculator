import { createSlice,type PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  display: string;
  expression: string[];
  overwrite: boolean;
}

const initialState: CalculatorState = {
  display: '0',
  expression: [],
  overwrite: false,
};

const isOperator = (val: string) => ['+', '−', '×', '÷'].includes(val);

const compute = (exp: string[]): number | string => {
  const toNum = (s: string) => parseFloat(s);
  const prec: Record<string, number> = { '+': 1, '−': 1, '×': 2, '÷': 2 };
  const output: (string | number)[] = [];
  const ops: string[] = [];

  for (const token of exp) {
    if (!isOperator(token)) {
      output.push(token);
    } else {
      while (ops.length && prec[ops[ops.length - 1]] >= prec[token]) {
        output.push(ops.pop()!);
      }
      ops.push(token);
    }
  }
  while (ops.length) output.push(ops.pop()!);

  const stack: number[] = [];
  for (const token of output) {
    if (typeof token === 'string' && isOperator(token)) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      let result = 0;
      switch (token) {
        case '+': result = a + b; break;
        case '−': result = a - b; break;
        case '×': result = a * b; break;
        case '÷':
          if (b === 0) return 'Error';
          result = a / b;
          break;
      }
      stack.push(Number(result.toPrecision(12)));
    } else {
      stack.push(toNum(token as string));
    }
  }
  return stack[0];
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    handleButton: (state, action: PayloadAction<string>) => {
      const value = action.payload;

      const isNumberOrDot = !isNaN(Number(value)) || value === '.';
      const { display, overwrite } = state;

      if (isNumberOrDot) {
        if (overwrite) {
          state.display = value === '.' ? '0.' : value;
          state.overwrite = false;
        } else {
          state.display =
            display === '0' && value !== '.' ? value : display + value;
        }
      } else if (value === 'AC') {
        state.display = '0';
        state.expression = [];
        state.overwrite = false;
      } else if (value === '+/-') {
        state.display = String(parseFloat(display) * -1);
      } else if (value === '%') {
        state.display = String(parseFloat(display) / 100);
        state.overwrite = true;
      } else if (value === '=') {
        const exp = [...state.expression, display];
        const result = compute(exp);
        state.display = String(result);
        state.expression = [];
        state.overwrite = true;
      } else if (isOperator(value)) {
        const newExp = overwrite
          ? [...state.expression.slice(0, -1), value]
          : [...state.expression, display, value];
        state.expression = newExp;
        state.overwrite = true;
      }
    },
  },
});

export const { handleButton } = calculatorSlice.actions;
export default calculatorSlice.reducer;
