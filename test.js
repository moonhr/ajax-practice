const a = `
https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D&
`

const b = "endponit 주소" + "주소값";

const endponit = "http://apis.data.go.kr/6300000/eventDataService";

const keyName = "SP6poFNj53tVrUmPFA7YiAuohTBnOXQ%2BUE4J6uq0ItPV49i%2Bu2%2FVXlNUnq5v3WumEyZthjVOj9wG%2FotkQW%2F5kg%3D%3D";

//keyName 넣어서 조립
const example = `
http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=${keyName}&numOfRows=10&pageNo=1
`

console.log(example)