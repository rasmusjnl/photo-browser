import axios from "axios";

/** Create a mock axios instance to handle requests to our mock JSON server */
const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000 /** 10 seconds */,
  headers: {
    "Content-type": "application/json",
  },
});

interface ParsedLinkHeader {
  first: number;
  prev?: number;
  next?: number;
  last: number;
}

/* Link header example format:
 *
const mockLinkHeader = `<http://jsonplaceholder.typicode.com/photos?_page=1>; rel="first", 
                        <http://jsonplaceholder.typicode.com/photos?_page=11>; rel="prev", 
                        <http://jsonplaceholder.typicode.com/photos?_page=13>; rel="next", 
                        <http://jsonplaceholder.typicode.com/photos?_page=500>; rel="last"`;
*/

// Parse the link header sent in the response of the API call.
// Link header should always exist on paginated queries and have the format above.
const parseLinkHeader = (linkHeader: string): ParsedLinkHeader => {
  // Split the link header string into separate links with the relative page identifier
  const splitByRel = linkHeader.split(", ");

  // Create a list that contains lists that contain the separated relative page identifier and its page
  const listOfRelsAndLinks = splitByRel.map((linkWithRel) => {
    const splitLinkWithRel = linkWithRel.split("; ");
    const link = splitLinkWithRel[0];
    const rel = splitLinkWithRel[1];

    const relName = rel.split("=")[1].slice(1, -1);
    const page = link.split("_page=")[1].split(">")[0];
    const pageNumber = parseInt(page);

    return [relName, pageNumber];
  });
  return Object.fromEntries(listOfRelsAndLinks);
};

apiInstance.interceptors.response.use(
  (response) => {
    const linkHeader = response.headers.link;
    if (!!linkHeader) {
      const parsedLinkHeader = parseLinkHeader(linkHeader);
      return {
        data: response.data,
        nextPage: parsedLinkHeader["next"],
      };
    }

    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;
