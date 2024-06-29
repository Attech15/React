import React from 'react'
import './card.css'

function Card({channel="Monkeydluffy",btn="sonGoku"}) {
    console.log(channel);
    return (
        <>
        <div className="card">
                    <div className="header">
						<span className="title">{btn}</span>
						<span className="price">Free</span>
					</div>
					<p className="desc">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="lists">
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" className="action">{channel}</button>
		</div>
        </>
    )
}

export default Card
