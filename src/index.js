import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

class Index extends React.Component {

	render(){
		return (
			 <ApolloProvider client={client}>
		      <App />
		    </ApolloProvider>
			);
	}
}


ReactDOM.render( <Index /> , document.getElementById('root') )