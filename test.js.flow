// @flow

import { type AsyncValue } from '.'

async function test(x: AsyncValue<number>) {
	1 - await x
}

test(42)
test(Promise.resolve(42))
