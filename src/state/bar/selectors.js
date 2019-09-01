export const selectorBar = state => state.bar;
export const selectorBarBars = state => selectorBar(state).bars;
export const selectorBarLimit = state => selectorBar(state).limit;
