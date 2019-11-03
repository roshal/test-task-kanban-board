
const m__name_generator = require('./name-generator')


test(m__name_generator.name, () => {
	const map = m__name_generator(10)
	const received = map({
		rootContext: '/abc',
		context: '/abc/def',
	}, null, 'name')
	const expected = 'name--0391527486'
	expect(received).toEqual(expected)
})
