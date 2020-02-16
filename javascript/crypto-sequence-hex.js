
const crypto = require('./crypto')


const string_ten = '0123456789'
const string_six = 'abcdef'

const pairs_ten = crypto.brace(string_ten.length)
const pairs_six = crypto.brace(string_six.length)

const limit_ten = pairs_ten.length
const limit_six = pairs_six.length

const limit = limit_six + limit_ten


module.exports = function () {
	const array_six = string_six.split('')
	const array_ten = string_ten.split('')
	this.digest = (digest) => {
		return crypto.alternate(3, array_ten, array_six).join('')
	}
	this.update = (string) => {
		crypto.decompose(limit, string).forEach((value) => {
			if (value < limit_six) {
				crypto.swap(array_six, ...pairs_six[value % limit_six])
			} else {
				value -= limit_six
				crypto.swap(array_ten, ...pairs_ten[value % limit_ten])
			}
		})
	}
}
