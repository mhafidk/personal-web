import { gql } from 'graphql-request';

export const postsQuery = gql`
	query GetPosts {
		posts {
			slug
			title
			updatedAt
			createdAt
			tags
			description
		}
	}
`;

export const projectsQuery = gql`
	query GetProjects {
		projects {
			name
			slug
			description
			tags
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;
