export const LOADING = 'LOADING';

export function toggleLoading(isLoading) {
	return {
		type: LOADING,
		payload: isLoading,
	};
}
