# dataTable.rowSpan.js
How to do rowSpan with dataTable.

First create you table with all the columns, after that you add the class 'has-rowGroup' in the columns header witch will have the rowSpan .

Heres a example:

	<table id="tableTeste">
		<thead>
			<tr>
				<th class="has-rowspan">Teste 1</th>
				<th>Teste 2</th>
				<th>Teste 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>1</td>
				<td>3</td>
			</tr>
			<tr>
				<td>1</td>
				<td>5</td>
				<td>5</td>
			</tr>
			<tr>
				<td>4</td>
				<td>1</td>
				<td>3</td>
			</tr>
			<tr>
				<td>5</td>
				<td>2</td>
				<td>4</td>
			</tr>
		</tbody>
	</table>

By default, the first column is the handle column to rowspan the table.
And that's all.
