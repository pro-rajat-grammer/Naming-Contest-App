import React, { useEffect, useState } from 'react'
import ContestPreview from './contest-preview'
import { fetchContestList } from '../api-client'
import Header from './Header'

const ContestList = ({ initialContests, onContestClick }) => {

    const [contests, setContests] = useState(initialContests ?? [])
    // debugger;
    useEffect(() => {
        if (!initialContests) {
            fetchContestList().then((contests) => {
                setContests(contests)
                // console.log(contests);
            })
        }
    }, [initialContests])

    return (

        <>  <Header message="Naming Contests" />
            <div className='contest-list' >
                {contests.map((contest) => {
                    return (
                        <ContestPreview key={contest.id} contest={contest} onClick={onContestClick} />
                    )
                })}
            </div>
        </>
    )
}
export default ContestList
