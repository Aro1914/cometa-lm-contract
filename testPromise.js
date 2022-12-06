let done = false

const printFs = async () => {
	while (!done) {
		console.log('f')
    }
    return false
}

const printBs = async () => {
	while (!done) {
		console.log('b')
    }
    return false
}

const wait = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve()
			done = true
		}, 5000)
	})

await Promise.all([
    printFs(),
    printFs(),
    wait()
])