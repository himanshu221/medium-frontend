const intDateFormat = new Intl.DateTimeFormat("en-ZA",{
    year: "numeric", month: "long", day: "numeric"
});

const date = Date.now()

console.log(intDateFormat.format(date))