import React from 'react'

function MainLoading() {
    return (
        <div className="w-full h-full overflow-hidden fixed left-1/2 top-1/2 bg-white -translate-x-1/2 -translate-y-1/2 z-10 dark:bg-[#272929]">
            <div className="max-w-[1200px] h-[100vh] flex justify-center mx-auto items-center">
                <img src="./../Images/mainpuppy.gif" alt="loading" />
            </div>
        </div>
    )
}

export default MainLoading