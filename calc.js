/**
 * Created by YaNaY on 22/03/14.
 */
var ipAddress = "127.0.0.1";
var portNumber = "52000";
var httpModule = require("http");

httpModule.createServer(
    function serviceRequest(request, response) {

        // Check what file the user has requested and take necessary action
        var queryString = new String(request.url);
        //console.log("querystring is:" + queryString);

        //var keyValuePairs = queryString.split("&"); // Splitting the query string based on & delimiter
        var action_numbers_str = queryString.split("?"); // Splitting the query string based on & delimiter

        // Now action_numbers_str[0] contains our action
        var action = action_numbers_str[0].replace("/", "");
        var numbers = (new String(action_numbers_str[1])).split("&");
        //var firstNumber = (new String(numbers[0].split("\\="))); // extracting the first number
        var firstNumber = ((new String(numbers[0])).split("="))[1];
        var secondNumber = ((new String(numbers[1])).split("="))[1]; // extracting the second number
        console.log(firstNumber);
        console.log(secondNumber);
        // calling the method to get the result
        var result = getResult(action.toLowerCase(), Number(firstNumber), Number(secondNumber));

        // HTML which we will display to the user
        //var htmlContent = "<html><b>" + action + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</b></html>";
        var htmlContent = "<html>The result is " + result + "</html>";
        //console.log(htmlContent);

        // write the response
        response.end(htmlContent)
    }
).listen(portNumber, ipAddress);

//
function getResult(operation, number1, number2) {
    var result = 0;
    if (operation == "add")
        result = number1 + number2;
    else if (operation == "subtract")
        result = number1 - number2;
    else if (operation == "multiply")
        result = number1 * number2;
    else if (operation == "divide" && number2 != 0)
        result = number1 / number2;
    else if (operation == "divide" && number2 == 0)
        result = "can't divide by 0";
    else if (operation == "fibonacci")
        result = fibonacci(number1);
    return result;
}

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
