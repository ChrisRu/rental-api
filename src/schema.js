import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

type Column {
	type: String
	name: String
	extend: Boolean
}

type Item {
	id: Int!
	name: String
	type: String
	crew: String
	rented: [Rented]
	repairs: [Repair]
}

type Rented {
	date: String
	from: String
	to: String
	by: String
}

type Repair {
	info: String
}

type Query {
	columns: [Column]
	boats: [Item]
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
