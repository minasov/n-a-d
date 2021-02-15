import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

interface Props {
  data?: {
    name: string;
    loading: boolean;
  }
}

const Component: React.FC<Props> = ({ data }) => (
  <span>
    {data?.loading? '..' : data?.name}
  </span>
)

const query = gql`
  query name {
    name
  }
`

export default graphql<Props, Props>(query)(Component)
