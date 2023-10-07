export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'deposit' : IDL.Func([IDL.Float64], [IDL.Text], []),
    'withdraw' : IDL.Func([IDL.Float64], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
