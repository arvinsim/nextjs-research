'use client'

import React, {useState} from 'react'
import Photo from "@/_components/Photo";
import Modal from "@/_components/Modal";
import Link from "next/link";

type InterceptedPhotoPageProps = {
    params: {
        id: string
    }
}
export default function InterceptedPhotoPage(props: InterceptedPhotoPageProps) {
    const [isModalOpen, setModalOpen] = useState(true);

    return <div>
        <Link href={'/feed'}>Back to Feed Page</Link>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <Photo id={props.params.id} />
        </Modal>
   </div>
}
