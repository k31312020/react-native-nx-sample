export const logOut = () => ({
    type: 'LOGOUT'
});

export const logOutEffect = (navigation) => { 
    return function(dispatch) {
        dispatch({type: 'LOGOUT'});
        return navigation.navigate('signin');
    }
}