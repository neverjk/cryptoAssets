$.get('https://poloniex.com/public?command=returnCurrencies', function (data) {
    console.log(data);
    var cryptoAssets = jQuery.parseJSON(JSON.stringify(data));
    console.log(cryptoAssets);
    var result = [];
    for (var i in cryptoAssets)
        result.push([i, cryptoAssets[i]]);

    console.log(result);

    var rows = result;
    var html = '<table class="table table-striped" style="padding-top:10px; padding-bottom:10px;" id="mainTable">';
    html += '<thead class="thead-dark"><tr><th scope = "col" >ID</th ><th scope="col">Name</th><th scope="col">Human Type</th><th scope="col">Currency Type</th><th scope="col">TXFee</th><th scope="col">Min Conf</th><th scope="col">Remove</th></tr ></thead>';
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
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searcher");
    filter = input.value.toUpperCase();
    table = document.getElementById("mainTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        let found = false;
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                } else {

                }
            }
        }
        if (found) {
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }
       
    }
}