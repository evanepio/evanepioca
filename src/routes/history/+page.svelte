<script lang="ts">
	const historyItems: { employer: string; start: string; end: string; position: string }[] = [
		{
			employer: 'Binary Star / Levio',
			start: 'April 4, 2022',
			end: 'Ongoing',
			position: 'Principal Consultant'
		},
		{
			employer: 'Binary Star',
			start: 'May 4, 2020',
			end: 'April 1, 2022',
			position: 'Senior Consultant'
		},
		{
			employer: 'Self-employed',
			start: 'February 24, 2014',
			end: 'May 1, 2020',
			position: 'Contractor'
		},
		{ employer: 'CGI', start: '2007 (?)', end: 'February 21, 2014', position: 'Consultant' }
	];
</script>

<svelte:head>
	<title>Employment History</title>
	<meta name="description" content="Evan Porter's employment history" />
</svelte:head>

<div class="text-column">
	<h1>Employment History</h1>

	<table class="table-auto shadow-lg bg-white border-collapse m-3 border-blue-500 border-2">
		<thead class="bg-blue-500 text-white font-extrabold uppercase">
			<tr>
				<th class="p-2">Employer</th>
				<th class="p-2">Start</th>
				<th class="p-2">End</th>
				<th class="p-2">Position</th>
			</tr>
		</thead>
		<tbody>
			{#each historyItems as item}
				<tr class="bg-white even:bg-yellow-100">
					<td class="p-2">{item.employer}</td>
					<td class="p-2">{item.start}</td>
					<td class="p-2">{item.end}</td>
					<td class="p-2">{item.position}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
