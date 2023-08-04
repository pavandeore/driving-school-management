import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { User } from "../../entities/User";
import { MessageType } from "../TypeDefs/Message";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString }
    },
    async resolve(parent:any, args:any){
        const { name } = args;
        await User.insert( { name } )
        return args
    }
}

export const UPDATE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    },
    async resolve(parent:any, args:any){
        const { id, name } = args;
        // const user = await User.findOne(id)
        await User.update(id, { name: name })

        return{ successful: true, message: "Update worked!" }
    }
}


export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },

    },
    async resolve(parent:any, args:any){
        const id= args.id;
        await User.delete(id)
        return{ successful: true, message: "Delete worked!" }
    }
}