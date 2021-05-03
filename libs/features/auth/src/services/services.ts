import { getUsers } from './api';
export const Service = ({email, password}) => (
    getUsers().then( res => { debugger
        console.log({response: res});
        const user = res.find((user) => user.email === email);
        if (!user) {
            fetch('http://10.0.2.2:3000/users', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email:email, password:password})}).then(res => JSON.stringify).then(res => {console.log(res)})
        } else {
            
        }
    })
)

