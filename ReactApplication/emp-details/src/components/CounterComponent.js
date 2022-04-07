export default function CounterComponent() {
    var data = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    setInterval(() => {
        data = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        console.log(data);
    }, 1000);
    
    return <h1>{data}</h1>
}