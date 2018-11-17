import { gql } from "apollo-boost";

const getTable = gql`
 {
  Produks {
    id 
    name
    Produk {
      name
    }
  }
}
`;


export {
 getTable
  
};