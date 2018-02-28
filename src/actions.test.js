import {
  GENERATE_AURAL_UPDATE, 
  generateAuralUpdate,
  RESTART_GAME,
  restartGame,
  MAKE_GUESS,
  makeGuess
} from './actions';

describe('generateAuralUpdate', () => {
  it('should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe('restartGame', () => {
  it('should return the action', () => {
    const correctAnswer = 'foo';
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual('foo');
  });
});

describe('makeGuess', () => {
  it('should return the action', () => {
    const guess = 1;
    const action = makeGuess(1);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(1);
  });
});
