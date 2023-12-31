'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {

		await queryInterface.bulkInsert('Labels',
			[
				// eslint-disable-next-line quotes
				{ id: '5400772612', title: 'bug', description: "Something isn't working", issueId: '1681650646'},
				{ id: '5400772629', title: 'enhancement', description: 'New feature or request', issueId: '1681650646'}
			], {})

	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Labels', null, {})
	}
}
