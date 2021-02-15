import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import shareUrl from "../lib/sharedUrl";

interface Props {
    data?: {
        url: string;
        loading: boolean;
    }
}

const Component: React.FC<Props> = ({ data }) => (
    <span>
            {data?.loading? '..' : shareUrl(data?.url ,)}
  </span>
)

const query = gql`
  query url {
    url
  }
`

export default graphql<Props, Props>(query)(Component)
