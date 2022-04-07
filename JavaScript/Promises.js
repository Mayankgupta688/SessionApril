var myPromise = new Promise(function(resolve, reject) {
    var data = {
        userName: "Mayank",
        userAge: 20
    }
    setTimeout(() => {

        throw new Error("SomeError")
        
    }, 15000)
})

function failureScenerio(data) {
    alert(data)
}

myPromise.then((data) => {
    alert(data)
}, failureScenerio)