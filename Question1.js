const convertURLToObject = (url) => {
  const convertedObject = JSON.parse(
    '{"' +
      decodeURI(url)
        .replace("?", "")
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/%2C/g, ",") +
      '"}'
  );
  return convertedObject;
};

const url =
  "?from=1643493600000&to=1644098399999&from_distance=2&to_distance=5&unique=true&city=%5B%22Amman%22%2C%22Khalda%22%5D&rep=%5B%2260bdd643f030f019eaee92db%22%2C%226058e37e042093445519d1a3%22%5D&withMedia=true";

console.log(convertURLToObject(url));
