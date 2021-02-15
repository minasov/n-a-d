import Link from 'next/link'
import WithApollo from '../lib/with-apollo'
import Name from '../components/Name'
import React from 'react';
import Address from "../components/Address";
import Url from "../components/Url";

const Page = () => (
    <div>
        <h4><Name/></h4>
        <p><Address/></p>
        <p><Url/></p>
        <Link href="/about"><a>About</a></Link>
    </div>
)

export default WithApollo(Page)
