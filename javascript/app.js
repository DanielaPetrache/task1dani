$(document).ready(function () {
    // var $table = $('#table');

    localStorage.setItem('mydata', JSON.stringify({
        "buildings": [{ "name": "Vasile Milea", "city": "Bucuresti", "rooms": [{ "id": 11, "name": "Atena", "floor": 5, "reservations": [] }, { "id": 12, "name": "Selena", "floor": 5, "reservations": [{ "id": 111, "by": "Timotei Manolache", "from": "2017-12-06T09:00:00.000Z", "duration": 30 }] }, { "id": 13, "name": "Termis", "floor": 5, "reservations": [{ "id": 112, "by": "Vlad Livada", "from": "2017-12-06T10:30:00.000Z", "duration": 60 }, { "id": 113, "by": "Dragos Moraru", "from": "2017-12-06T11:30:00.000Z", "duration": 90 }] }] }, { "name": "Whatever", "city": "Brasov", "rooms": [{ "id": 14, "name": "Frank Sinatra", "floor": 1, "reservations": [{ "id": 114, "by": "Birloi Florian", "from": "2017-12-06T07:00:00.000Z", "duration": 999999 }] }, { "id": 15, "name": "Dean Martin", "floor": 1, "reservations": [] }, { "id": 16, "name": "Sammy Davis", "floor": 1, "reservations": [] }] }]
    }));
    var mydata = JSON.parse(localStorage.getItem('mydata'));


    const fetchbuildings = function () {
        mydata.buildings.forEach((building) => {
            let roomRow;
            building.rooms.forEach((room) => {
                roomRow = `<tr><td>` + building.name + `</td><td>` + room.name + `</td><td>` + room.floor + `</td>`;
                roomRow += `<td><button onclick="bookRoom(${room.id})" class="btn btn-primary btn-md">Book room!</button></td>`
                roomRow += "</tr>";
                $('#table-row').append(roomRow);
            });
        })
    }
    fetchbuildings();
});

function bookRoom(id) {
    console.log(id);
}
