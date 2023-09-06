import { FEATURE } from '@/constant'
import React from 'react'
import Card from './Card'

const KeyFeature = () => {
    const keyFeature = FEATURE
        .filter(feature => feature.keyFeature)
        .map(feature => ({ name: feature.name, imgPath: feature.imgPath, description: feature.description }));

    return (
        <section className='mt-12'>
            <div className="container mx-auto flex justify-between gap-y-10 flex-wrap">
                
                {
                    keyFeature && (
                        keyFeature.map(feature => <Card item={feature} />)
                    )
                }
            </div>
        </section>
    )
}

export default KeyFeature