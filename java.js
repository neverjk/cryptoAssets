$.get('https://poloniex.com/public?command=returnCurrencies', function (data) {
    console.log(data);
    var cryptoAssets = jQuery.parseJSON(JSON.stringify(data));
    console.log(cryptoAssets);
    var result = [];
    for (var i in cryptoAssets)
        result.push([i, cryptoAssets[i]]);

    console.log(result);
});