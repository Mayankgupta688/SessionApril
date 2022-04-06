export default function EmployeeListComponent() {
    var employeeList = [
        {"id":"26","createdAt":"2019-07-09T18:08:17.841Z","name":"Lyric Metz","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"28","createdAt":"2019-07-09T20:32:28.258Z","name":"Efren Windler PhD","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"29","createdAt":"2019-07-10T03:43:08.857Z","name":"Kenya Reichel","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"30","createdAt":"2019-07-09T18:06:41.721Z","name":"Edmund Fisher","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"31","createdAt":"2019-07-09T11:44:07.092Z","name":"Lenora Price","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"32","createdAt":"2019-07-09T20:56:58.884Z","name":"Clementina Sanford","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"},
        {"id":"33","createdAt":"2019-07-10T07:56:08.182Z","name":"Willow Windler","avatar":"https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166"}
    ]

    function iterateList() {
        var renderTemplate = [];
        for(var i = 0; i< employeeList.length; i++) {
            renderTemplate.push((
                <div>
                    <h1>User Name is {employeeList[i].name}</h1>
                </div>
            ))
        }

        return renderTemplate;
    }

    return (
        <div>
            {iterateList()}
        </div>
    )
}