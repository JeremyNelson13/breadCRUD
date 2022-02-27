const React = require('react')
const baker = require('../controllers/bakers_controller')
const breads = require('../controllers/breads_controller')
const Default = require('./layouts/default')

function Index ({breads, bakers, title}) {
    console.log('breads: ', breads)
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* this is a JSX comment */}
            {/* <p>I have {breads[0].name} bread!</p> */}
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map(baker => {
                        return(
                            <li key={baker.id}>
                                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
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