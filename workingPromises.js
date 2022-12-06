let done = false

const printFs = () =>
	new Promise((resolve) => {
		const fTimer = setInterval(() => {
			console.log('f')
			if (done) {
				clearInterval(fTimer)
				resolve()
			}
		}, 500)
	})

const printBs = () =>
	new Promise((resolve) => {
		const bTimer = setInterval(() => {
			console.log('b')
			if (done) {
				clearInterval(bTimer)
				resolve()
			}
		}, 500)
	})

const wait = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			done = true
			resolve()
		}, 5000)
	})

await Promise.all([printFs(), printBs(), wait()])
