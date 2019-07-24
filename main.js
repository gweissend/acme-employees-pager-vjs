let pageNumber = location.hash && !isNaN(location.hash) ? location.hash : 0

const updatePage = async () => {
    document.getElementById('pageNumber').innerText = pageNumber
    const response = await fetch (`https://acme-users-api-rev.herokuapp.com/api/users/${pageNumber}`)
    const employees = await response.json()
    // console.log(employees.users)
    const table = document.getElementById("employeeTable") 
    table.innerHTML =  `<tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Title</th>
                        </tr>
        ${employees.users.map(employee => `<tr> <td>${employee.firstName}</td> <td>${employee.lastName}</td> <td>${employee.email}</td> <td>${employee.title}</td></tr>`)
    .join('')}`
}
updatePage()

window.addEventListener('hashchange', function() {
    console.log('haschanged')
    updatePage()
})

const nextPage = document.getElementById("nextPage")

nextPage.addEventListener('click', (ev) => {
    ev.preventDefault();
    location.hash = ++pageNumber;
})

const prevPage = document.getElementById("previousPage")

prevPage.addEventListener('click', (ev) => {
    ev.preventDefault();
    location.hash = --pageNumber;
})

const firstPage = document.getElementById("firstPage")

firstPage.addEventListener('click', (ev) => {
    ev.preventDefault();
    pageNumber = 0;
    location.hash = pageNumber;
})

const lastPage = document.getElementById("lastPage")

lastPage.addEventListener('click', (ev) => {
    ev.preventDefault();
    pageNumber = 14;
    location.hash = pageNumber;
})
