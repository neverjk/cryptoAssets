$.get('https://poloniex.com/public?command=returnCurrencies', function (data) {
    console.log(data);
    var cryptoAssets = jQuery.parseJSON(JSON.stringify(data));
    console.log(cryptoAssets);
    var result = [];
    for (var i in cryptoAssets)
        result.push([i, cryptoAssets[i]]);

    console.log(result);

    var rows = result;
    var html = '<table class="table table-striped">';
    html += '<thead class="thead-dark"><tr><th scope = "col" >ID</th ><th scope="col">Name</th><th scope="col">Human Type</th><th scope="col">Currency Type</th><th scope="col">TXFee</th><th scope="col">Min Conf</th><th scope="col">Remove</th></tr ></thead>';
    //for (var j in rows[0]) {
    //    html += '<th>' + j + '</th>';
    //}
    //html += '</tr>';
    html += '<tbody>';
    for (var i = 0; i < rows.length; i++) {
        html += '<tr>';
        let counter = 0;
        for (var j in rows[i][1]) {
            html += '<td>' + rows[i][1][j] + '</td>';
            
            counter++;
            if (counter == 6) {
                break;
            }
        }
        html +='<td><button type="button" onclick="removeRow(this)" class="btn btn-outline-dark">Remove</button></td>'
        html += '</tr>';
    }
    html += ' </tbody></table>';
    document.getElementById('tablecontainer').innerHTML += html;
});

function removeRow(button) {
    var removable = button.parentNode.parentNode;
    removable.parentNode.removeChild(removable);

}