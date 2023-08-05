import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($name:  String!){
        createUser(name: $name){
            id
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id:  ID!, $name:  String!){
        updateUser(id: $id, name: $name){
            message
        }
    }
`;

export const DELTE_USER = gql`
    mutation deleteUser($id:  ID!){
        deleteUser(id: $id){
            message
        }
    }
`;