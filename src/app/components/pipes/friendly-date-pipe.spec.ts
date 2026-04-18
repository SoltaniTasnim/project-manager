import { FriendlyDatePipe } from './friendly-date-pipe';

describe('FriendlyDatePipe', () => {
  it('should format today as Aujourd\'hui', () => {
    const pipe = new FriendlyDatePipe();
    const today = new Date().toISOString();

    expect(pipe.transform(today)).toBe("Aujourd'hui");
  });
});
