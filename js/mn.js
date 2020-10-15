fetch('.netlify/functions/getusers')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.href = user.url
            a.target = '_blank'
            a.appendChild(document.createTextNode(user.login))
            li.appendChild(a)
            document.querySelector('#users').appendChild(li)
        })
    });
