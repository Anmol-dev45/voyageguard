import { FEATURE } from '@/constant'
import React from 'react'
import Card from './Card'

const KeyFeature = () => {
    const keyFeature = FEATURE
        .filter(feature => feature.keyFeature)
        .map(feature => ({ name: feature.name, imgPath: feature.imgPath, description: feature.description }));

    return (
        <section className='mt-12'>
            <div className="main-container">
<h2 className='heading'>Our key Feature</h2>
                <div className='flex justify-between gap-y-10 flex-wrap'>

                    {
                        keyFeature && (
                            keyFeature.map(feature => <Card item={feature} />)
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default KeyFeature