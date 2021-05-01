export const logOut = () => ({
    type: 'LOGOUT'
});

export const logOutEffect = (navigation) => {
    return function(dispatch) {
        dispatch('LOGOUT');
        return navigation.navigate('signin');
    }
}