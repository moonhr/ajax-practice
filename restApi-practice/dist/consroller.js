import { url } from "./key";
const AJAX = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}`, true);
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            console.log("데이터 받은 후 조회");
            const result = JSON.parse(xhr.responseText);
            console.timeLog(result);
        }
    });
    xhr.send();
};
AJAX();
