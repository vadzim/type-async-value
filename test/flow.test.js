// @flow

import { type AsyncValue } from ".."

it("should not fail", async () => {
	async function test(x: AsyncValue<number>) {
		expect(typeof (await x)).toBe("number")
		expect((await x) - 1).toBe(41)
	}

	await test(42)
	await test(Promise.resolve(42))
})
