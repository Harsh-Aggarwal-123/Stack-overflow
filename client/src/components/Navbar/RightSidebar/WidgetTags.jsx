import React from 'react'

const WidgetTags = () => {

    const tags = ['C', 'CSS',  'Express', 'Firebase', 'HTML', 'Java', 'Javascript','MERN','Mongodb','Mysql','Next.js','Node.js','PHP','Python','Reactjs']

    return (
        <div className='widget-tags'>
            <h4>Watched tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default WidgetTags