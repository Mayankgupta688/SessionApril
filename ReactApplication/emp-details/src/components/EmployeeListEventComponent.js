export default function EmployeeListEventComponent() {
    var employeeList = [
        {"id":"26","createdAt":"2019-07-09T18:08:17.841Z","name":"Mayank Metz","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"26","createdAt":"2019-07-09T20:32:28.258Z","name":"Anshul Windler PhD","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"29","createdAt":"2019-07-10T03:43:08.857Z","name":"Kenya Reichel","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"30","createdAt":"2019-07-09T18:06:41.721Z","name":"Edmund Fisher","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"31","createdAt":"2019-07-09T11:44:07.092Z","name":"Lenora Price","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"32","createdAt":"2019-07-09T20:56:58.884Z","name":"Clementina Sanford","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"33","createdAt":"2019-07-10T07:56:08.182Z","name":"Willow Windler","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"}
    ]

    function displayEvenOdd(employee) {
        if(employee.id % 2 === 0 ) {
            return <h2>The Employee Have Even Id</h2>
        } else {
            return <h2>The Employee Have Od Id</h2>
        }
    }

    function alertUser(id) {
        debugger;
        alert("User Id is: " + id)
    }
    
    return (
        <div>
            {employeeList.map(function(employee) {
                return (
                    <div key={employee.id}>
                        <img src={employee.avatar} alt={employee.name} title={employee.name} />
                        <h1>Employee Name from Iteration: {employee.name} Id: {employee.id}</h1>
                        {displayEvenOdd(employee)}
                        <input type="button" value="Delete" onClick={function buttonClickFunction() { alertUser(employee.id)}} /><hr/>
                    </div>
                )
            })}
        </div>
    )
}