import ContactForm from '@/components/ContactForm'
import Layout from '@/components/layout'
import PHeader from '@/components/PHeader'
import React from 'react'

export default function contact() {
    return (
        <div>
            <Layout PageTitle="Contact" >
            <PHeader ptitle="contact" />
            <ContactForm />
            </Layout>

        </div>
    )
}
