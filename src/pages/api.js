

export async function logInRequest(){
    let res = await fetch('http://localhost:5000/auth/login',{
        method: 'POST',//метод
        headers:{//объект с заголовками запроса; тип передаваемых данных 'application/json'
            'Content-Type': 'application/json'
        },
        credentials: 'include',// куки браузера
        body: JSON.stringify({
            email: this.formItems[0].value,
            password: this.formItems[1].value
        })
    })
    if (res.status=== 200) {
        let data = await res.json()
        console.log(data)
        console.log(data.isAdmin)

        window.user.value.isAdmin = data.isAdmin
        window.user.value.isAuth = true
        alert('Login success')
        await this.$router.replace({name: 'catalog'})
    } else if (res.status === 422) {
        alert('Введены некорректные данные')
    } else if (res.status === 401) {
        alert('Неверный логин или пароль')
    }
}

export async function logOutRequest() {
    let res = await fetch('http://localhost:5000/auth/logout',{
        method: 'POST',//метод
        headers:{//объект с заголовками запроса; тип передаваемых данных 'application/json'
            'Content-Type': 'application/json'
        },
        credentials: 'include',// куки браузера
    })
    console.log(await res.json())
    window.user.value.isAdmin = false
    window.user.value.isAuth = false
    await this.$router.go(0)
}


export async function allProductRequest(){
    let res = await fetch('http://localhost:5000/products/',{
        method: 'GET',//метод
        headers:{//объект с заголовками запроса; тип передаваемых данных 'application/json'
            'Content-Type': 'application/json'
        },
        credentials: 'include',// куки браузера
        // body: JSON.stringify({
        //     email: this.formItems[0].value,
        //     password: this.formItems[1].value
        // })
    })
    if (res.status === 200) {
        let data = await res.json()
        console.log(data)
        alert('Successful Response')
    // } else if (res.status === 422) {
    //     alert('Введены некорректные данные')
    // } else if (res.status === 401) {
    //     alert('Неверный логин или пароль')
    // }
    return data
}}

