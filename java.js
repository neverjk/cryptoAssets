$.get('https://poloniex.com/public?command=returnCurrencies', function (data) {
    console.log(data);
    var cryptoAssets = jQuery.parseJSON(JSON.stringify(data));
    console.log(cryptoAssets);
    var result = [];
    for (var i in cryptoAssets)
        result.push([i, cryptoAssets[i]]);

    console.log(result);

    var rows = result;
    var html = '<table class="table">';
    html += '<thead><tr><th scope = "col" >ID</th ><th scope="col">Name</th><th scope="col">Human Type</th><th scope="col">Currency Type</th><th scope="col">TXFee</th><th scope="col">Min Conf</th></tr ></thead>';
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
        html += '</tr>';
    }
    html += ' </tbody></table>';
    document.getElementById('container').innerHTML = html;
});