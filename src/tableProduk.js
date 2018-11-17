import React, { Component } from 'react';
import {Query} from "react-apollo";
import {getTable} from "./gql";

export default class TableProduk extends Component {




	loading(){
		return (
		 <tbody>
			 <tr>
			 	<td>Loading ...</td>
		 	 	<td></td>
	 	 	 	<td></td>
			 </tr>
		 </tbody>
		)
	}


	render() {
		return (
		
				<Query
			        query={getTable}
			      >
			      {({ loading, data, error }) => {
          				if (loading) return this.loading();
          				return (
          					<tbody>
          						{data.Produks.map((e,k) => (
          							<tr key={k}>
          								<td>{e.id}</td>
          								<td>{e.name}</td>
          								<td>
          									{e.Produk.map((z, x) => (
          										<span key={x}> {z.name} {x !== e.Produk.length - 1 ? "," : ""}</span>
          									))}
          								</td>
          							</tr>

          						))}
          					</tbody>
          				);
       				}}
		      </Query>
			
		);
	}
}
