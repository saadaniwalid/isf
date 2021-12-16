import Contactus from '@/components/Contactus'
import Layout from '@/components/layout'
import PHeader from '@/components/PHeader'
import Services from '@/components/Services'
import React from 'react'

export default function services() {
    return (
        <div>
            <Layout PageTitle="services"  >
            <PHeader  ptitle="services" />
            <Services spage={true} />
            <Contactus />
            </Layout>

        </div>
    )
}
