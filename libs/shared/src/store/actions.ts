export const logOut = () => ({
    type: 'LOGOUT'
});

export const logOutEffect = (navigation) => {
    return function(dispatch) {
        navigation.navigate('signin');
        return dispatch(logOut());
    }
}