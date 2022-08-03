import React from 'react'

const FooterPrimary = (): JSX.Element => {
  return (
    <>
        <section className='flex flex-col justify-center items-center bg-navy text-white'>
            <div>

                <div>
                    <ul className='flex flex-row justify-center items-center'>
                        <li className="p-2">Cookies</li>
                        <li className="p-2">T's & C's</li>
                        <li className="p-2">Privacy</li>
                    </ul>
                </div>

            </div>

            <span className='p-2'>Lewis Broadhurst 2022</span>
        </section>
    </>
  )
}

export default FooterPrimary;