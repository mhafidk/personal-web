import { gql } from 'graphql-request';

const PROJECT_FRAGMENT = gql`
	fragment ProjectDetails on Project {
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
`;

const POST_FRAGMENT = gql`
	fragment PostDetails on Post {
		slug
		title
		updatedAt
		createdAt
		tags
		description
		content
		coverImage {
			url
		}
	}
`;

export const postsQuery = gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts {
			...PostDetails
		}
	}
`;

export const postQuery = gql`
	${POST_FRAGMENT}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
		}
	}
`;

export const projectsQuery = gql`
	${PROJECT_FRAGMENT}
	query GetProjects {
		projects {
			...ProjectDetails
		}
	}
`;

export const projectQuery = gql`
	${PROJECT_FRAGMENT}
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
		}
	}
`;
