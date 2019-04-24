describe('check for special value "null"', function checkTypeofNull() {
  it('check type of null', function checkNull() {
    expect(typeof null).toBeTruthy();
  });
  it('check null', function checkNull() {
    expect(null).toBeNull();
  });
  it('strict comparison null and undefined', function checkNull() {
    expect(undefined === null).toBeFalsy();
  });
  it('comparison null and undefined', function checkNull() {
    expect(undefined == null).toBeTruthy();
  });
  it('comparison of two null', function checkNull() {
    expect(null === null).toBeTruthy();
  });
});
