import axios from "axios";

export const GET = async (req, { params }) => {
  const fusekiEndpoint = "http://localhost:3030/Basketball/query";

  // SPARQL query to retrieve data
  const sparqlQuery = `
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX basketballOntology: <http://www.semanticweb.org/hassankaabechi/ontologies/2023/11/basketballOntology#>


SELECT ?coach ?name ?nationality
WHERE {
   ?coach rdf:type basketballOntology:Coach.
    { ?coach basketballOntology:coachName ?name. }
    { ?coach basketballOntology:nationality ?nationality. }
    FILTER (?name = "${params.id.replace("%20", " ")}")
}
`;
  try {
    // Make your GET request to the Fuseki server
    console.log(params.id.replace("%20", " "));
    const response = await axios.get(fusekiEndpoint, {
      params: {
        query: sparqlQuery,
      },
    });
    const data = await response.data.results.bindings;
    return new Response(JSON.stringify({ data }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }));
  }
};
