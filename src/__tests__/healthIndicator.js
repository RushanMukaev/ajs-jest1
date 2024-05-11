import healthIndicator from "../index.js"

test('health > 50', () => {
    expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
})

test('50 > health > 15', () => {
    expect(healthIndicator({ name: 'Маг', health: 40 })).toBe('wounded');
})

test('15 > health', () => {
    expect(healthIndicator({ name: 'Маг', health: 10 })).toBe('critical');
})