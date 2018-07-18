export const LOADING = 'LOADING'
export const CURRENT_LOCATION = 'CURRENT_LOCATION'
export const LOCATION_PERMISSION = 'LOCATION_PERMISSION'

export function toggleLoading(isLoading) {
  return {
    type: LOADING,
    payload: isLoading,
  }
}

export function setLocationPermission(permission) {
  return {
    type: LOCATION_PERMISSION,
    payload: permission,
  }
}

export function setLocation(location) {
  return {
    type: CURRENT_LOCATION,
    payload: location,
  }
}
