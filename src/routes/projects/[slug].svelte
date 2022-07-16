<script context="module">
	import { client } from '$lib/graphql-client';
	import { projectQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(projectQuery, variables);

		return {
			props: {
				project
			}
		};
	};
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>My Portfolio | {project.name}</title>
</svelte:head>

<h1>{project.name}</h1>
<img src={project.image[0].url} alt="" />
<p>{project.tags}</p>
<a class="mr-5" href={project.demo}>Demo</a>
<a href={project.sourceCode}>Source Code</a>
<article class="prose prose-xl">
	{@html marked(project.description)}
</article>
