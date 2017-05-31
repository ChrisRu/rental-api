import fs from 'fs';

const boats = JSON.parse(fs.readFileSync("./data/boats.json"));

//let nextId = channels.length;

export const resolvers = {
    Query: {
        boats: () => boats.items,
        columns: () => boats.columns
    }
    /*
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = { id: ++nextId, name: args.name };
            channels.push(newChannel);
            return newChannel;
        }
    }*/
};
