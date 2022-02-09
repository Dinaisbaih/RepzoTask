const wholeObject = {
  namespace: "repzo",
  user: {
    name: {
      first: "Ahmad",
      last: "Yousef",
    },
    address: { contry: "Jordan", city: "Amman" },
  },
};

const nestedStringKey = "user.address.city";

const handleNestedObject = (wholeObject, nestedStringKey) => {
  const firstElement = nestedStringKey.split(".")[0];
  const secondElement = nestedStringKey.split(".")[1];
  const thirdElement = nestedStringKey.split(".")[2];

  return wholeObject[firstElement][secondElement][thirdElement];
};

console.log(handleNestedObject(wholeObject, nestedStringKey));
