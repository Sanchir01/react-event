import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '~/shared/types/User.type'

const initialState: UserType = {
	id: '',
	name: '',
	lastName: '',
	birthdate: '',
	status: '',
	baseLocations: [
		{
			latitude: 0,
			longitude: 0,
			district: '',
			city: ''
		}
	],
	educations: [
		{
			organizationName: '',
			level: '',
			specialization: '',
			graduationYear: 0
		}
	],
	additionalInfo: '',
	contacts: {
		email: '',
		phone: '',
		social: {
			telegram: '',
			whatsapp: '',
			vk: ''
		}
	},
	favouriteRequests: ['']
}

export const userSlice = createSlice({
	initialState,
	name: 'userProfile',
	reducers: {
		setUser: (state, action) => {
			state = action.payload
		}
	}
})
