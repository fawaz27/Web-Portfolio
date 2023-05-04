

function add(a: any , b: any) {
    return a+b;
}

test('should first', () => {
    
    expect(add(1,2)).toBe(3);
})