import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from './useRedux'
import { userSlice } from '~/app/store/user/userSlice'
const rootActions = {
	...userSlice.actions
}

export const useActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
