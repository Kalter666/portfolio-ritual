import { TelImgModule } from './tel-img.module';

describe('TelImgModule', () => {
  let telImgModule: TelImgModule;

  beforeEach(() => {
    telImgModule = new TelImgModule();
  });

  it('should create an instance', () => {
    expect(telImgModule).toBeTruthy();
  });
});
