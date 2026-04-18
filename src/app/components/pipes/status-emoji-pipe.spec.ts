import { StatusEmojiPipe } from './status-emoji-pipe';

describe('StatusEmojiPipe', () => {
  it('should return the right emoji for each task status', () => {
    const pipe = new StatusEmojiPipe();

    expect(pipe.transform('Terminé')).toBe('✅');
    expect(pipe.transform('En cours')).toBe('🚧');
    expect(pipe.transform('En attente')).toBe('⏳');
  });
});
