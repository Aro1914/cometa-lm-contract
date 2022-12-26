/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

export const main = Reach.App(() => {
	const Admin = Participant('Admin', {})
	const Post = Events({
		postBeneficiary: [Address],
		postPool: [Contract],
	})
	const Users = API({
		notify: Fun([Contract], UInt),
	})
	init()
	Admin.publish()
	commit()
	Admin.publish()
	Post.postBeneficiary(Admin)
	const [id] = parallelReduce([0])
		.invariant(balance() == 0)
		.while(true)
		.api(Users.notify, (pool, ret) => {
			Post.postPool(pool)
			ret(id)
			return [id + 1]
		})
	commit()
	exit()
})
