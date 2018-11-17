import React, { Component } from 'react';
import TableProduk from "./tableProduk"

export class App extends Component {
	render() {
		return (
			<div className="container mt-3 member">
		<div className="card bagian-table">
			<div className="card-header label-team">
				Produk
			</div>
			<div className="card-body">
					<table  className="table table-hover">
						<thead>		
							<tr>
								<td>Id</td>
								<td >Name</td>
								<td >Products</td>
							
							</tr>
						</thead>
						<TableProduk />
					</table>
			
			</div>
		</div>
	</div>
		);
	}
}


export default App;