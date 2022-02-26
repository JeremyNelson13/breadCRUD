const React = require('react')
const breads = require('../controllers/breads_controller')
const Default = require('./layouts/default')

function Index ({breads, title}) {
    console.log('breads: ', breads)
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* this is a JSX comment */}
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return(<li key={index}>
                            <a href={`/breads/${bread.id}`}>
                               {bread.name} 
                            </a>
                        </li>)
                    })
                }
            </ul>
            <div className='newButton'>
                <a href='/breads/new'><button>Add a New Bread</button></a>
            </div>
            <div>
                <a href='/breads'><button>Return to Index</button></a>
            </div>
        </Default>
    )
}

module.exports = Index