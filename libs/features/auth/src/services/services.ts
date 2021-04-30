export const Service = ({email, password}) => (
    fetch('http://10.0.2.2:3000/users', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email:email, password:password})}).then(res => JSON.stringify).then(res => {console.log(res)})
)

