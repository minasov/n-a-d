import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

interface Props {
    data?: {
        streetAddress: string;
        loading: boolean;
    }
}

const Component: React.FC<Props> = ({ data }) => (
    <span>
    {data?.loading? '..' : data?.streetAddress}
  </span>
)

const query = gql`
  query streetAddress {
    streetAddress
  }
`

export default graphql<Props, Props>(query)(Component)
