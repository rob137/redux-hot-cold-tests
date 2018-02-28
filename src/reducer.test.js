import reducer from './reducer';
import { restartGame, makeGuess, generateAuralUpdate } from './actions';

const defaultState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: 1
};
const alteredState = {
  guesses: [1, 2, 3],
  feedback: 'Foo!',
  auralStatus: 'Bar!',
  correctAnswer: 123
};
const guess = 99;
describe('restartGame', () => {
  it('should restart the game', () => {
    const correctAnswer = 1;
    const state = reducer(alteredState, restartGame(correctAnswer));
    expect(state).toEqual(defaultState);
  });
});

describe('makeGuess', () => {
  it('should save a new guess to the state', () => {
    const state = reducer(defaultState, makeGuess(guess));
    expect(state.guesses[0]).toEqual(99);
  });
});

describe('generateAuralUpdate', () => {
  it('should update the auralStatus, using plurals correctly', () => {
    let state = reducer(defaultState, generateAuralUpdate());
    let expectedAuralStatus = "Here's the status of the game right now: Make your guess! You've made 0 guesses.";
    expect(state.auralStatus).toEqual(expectedAuralStatus);
    state = reducer(state, makeGuess(1));
    state = reducer(state, generateAuralUpdate());
    expectedAuralStatus = "Here's the status of the game right now: You got it! You've made 1 guess. It was: 1";
    expect(state.auralStatus).toEqual(expectedAuralStatus);
    state = reducer(state, makeGuess(2));
    state = reducer(state, generateAuralUpdate());
    expectedAuralStatus = "Here's the status of the game right now: You're Hot! You've made 2 guesses. In order of most- to least-recent, they are: 2, 1";
    expect(state.auralStatus).toEqual(expectedAuralStatus);
  });
});