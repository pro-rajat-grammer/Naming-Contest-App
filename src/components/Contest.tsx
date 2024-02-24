import React, { useEffect, useState } from 'react'
import { addNewNameToContest, fetchContest } from '../api-client'
import Header from './Header'

const Contest = ({ initialContest, onContestListClick }) => {
    const [contest, setContest] = useState(initialContest);
    // console.log(contest);
    useEffect(() => {
        if (!contest.names) {
            fetchContest(contest.id).then((contest) => {
                setContest(contest)
            })     } 
    }, [contest.id, contest.names]);

    const handleClickContestClick = (event) => {
        event.preventDefault();
        onContestListClick()
    }

    const handleNewNameSubmit = async (event) => {
        event.preventDefault();
        const newNameInput = event.target.newName;  
        const updatedContest = await addNewNameToContest({
            contestId: contest.id,
            newNameValue: newNameInput.value})
        // console.log(updatedContest);
        setContest(updatedContest)
    };
    
    return (
        <>  <Header message={contest.contestName} />
            <div className='contest'>
                <div className="title">Contest Description</div>
                <div className="description">{contest.description}</div>
                <div className="title">Proposed names</div>
                <div className="body">
                    {contest.names?.length > 0 ?
                        (<div className="list">
                            {contest.names.map((proposedName) => (
                                <div className="item" key={proposedName.id} >
                                    {proposedName.name}</div>
                            ))}</div>)
                        :
                        (<div>No names proposed yet</div>)
                    }</div>
                <div className="title">Proposed a New Name</div>
                <div className="body">
                    <form onSubmit={handleNewNameSubmit} >
                        <input type="text" name="newName" placeholder='New Name here' />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <a href="/" className='link' onClick={handleClickContestClick} > Contest List</a>
            </div></>
    )
}
export default Contest
