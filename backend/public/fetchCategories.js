const endpoint = "/api/functions/getSortedTree";

const fetchData = async () => {
  try {
    const response = await fetch(endpoint);
    const responseData = await response.json();
    console.log(responseData.data);
  } catch (err) {
    console.log("Something went wrong");
  }
};
