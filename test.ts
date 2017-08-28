const $: any = {};



interface AjaxOptions {
    url: string;
    type: string;
}

function ajaxRequest(urlOrOptions: string | AjaxOptions) {
    if (typeof urlOrOptions === "string") {
        urlOrOptions.toLowerCase();
    } else {
        urlOrOptions.url;
    }
}







ajaxRequest({
    url: "http://google.com",
    type: "GET"
})

function operate(num1: number, num2: number, op: string) {
    if (op === "add") {
        return num1 + num2;
    }
}

let result = operate(4, 1, "subtract");
//result: undefined