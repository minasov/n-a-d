import Link from 'next/link'
import React from 'react';
import Name from '../components/Name'
import WithApollo from '../lib/with-apollo'

const About: React.FC<{}> = () => (
  <div>
    About Page
    <br/><br/>
    <Link href="/"><a>Go Back</a></Link>
  </div>
)

export default WithApollo(About)


