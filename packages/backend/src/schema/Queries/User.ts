import { GraphQLList } from "graphql"
import { UserType } from "../TypeDefs/User"

import { User } from "../../entities/User"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(): any{
        return User.find();
    }
}