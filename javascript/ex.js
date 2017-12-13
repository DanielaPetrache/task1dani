$(document).ready(function() {
var jsonut={"Cities":["LUSAKA","HARARE"],"Countries":["ZAMBIA","ZIMBABWE"]};
function createTableRow(cells) {
    var tds = cells.map(function (cellContent) {
        return '<td>' + cellContent + '</td>';
    }).join('');
    return '<tr>' + tds + '</tr>';
}
var countriesAndCitiesRow = function (ignore, index) {
    return createTableRow([
        data.Countries[index],
        data.Cities[index]
    ]);
};
$('#location').append(
    $.map(data.Countries, countriesAndCitiesRow)
);
})